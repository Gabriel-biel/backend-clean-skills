import {
  UploadParams,
  Uploader,
} from '@/domain/delivery-management/application/storage/uploder'
import { randomUUID } from 'crypto'

interface Upload {
  fileName: string
  url: string
}

export class FakeUploader implements Uploader {
  public uploads: Upload[] = []

  async upload({ fileName }: UploadParams): Promise<{ url: string }> {
    const url = randomUUID()
    this.uploads.push({
      fileName,
      url,
    })

    return { url }
  }
}