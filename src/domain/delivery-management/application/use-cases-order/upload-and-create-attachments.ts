import { Either, left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { InvalidAttachmentType } from '../errors/invalid-attachment-type'
import { Attachment } from '../../enterprise/entities/attachment'
import { AttachmentsRepository } from '../repositories/attachments-repository'
import { Uploader } from '../storage/uploder'

export interface UploadAndCreateAttachmentUseCaseRequest {
  fileName: string
  fileType: string
  body: Buffer
}

export type UploadAndCreateAttachmentUseCaseResponse = Either<
  InvalidAttachmentType,
  {
    attachment: Attachment
  }
>

@Injectable()
export class UploadAndCreateAttachmentUseCase {
  constructor(
    private attachmentRepository: AttachmentsRepository,
    private uploader: Uploader,
  ) {}

  async execute({
    fileName,
    fileType,
    body,
  }: UploadAndCreateAttachmentUseCaseRequest): Promise<UploadAndCreateAttachmentUseCaseResponse> {
    const regexValidateImg = /^image\/(jpeg|png)$/i
    if (!regexValidateImg.test(fileType)) {
      return left(new InvalidAttachmentType(fileType))
    }

    const { url } = await this.uploader.upload({
      fileName,
      fileType,
      body,
    })

    const attachment = Attachment.create({
      title: fileName,
      link: url,
    })

    await this.attachmentRepository.create(attachment)

    return right({ attachment })
  }
}
