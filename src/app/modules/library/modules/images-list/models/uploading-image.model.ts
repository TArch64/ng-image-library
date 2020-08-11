import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUploadingImageJSON } from '../types';

export class UploadingImageModel {
  public static fromFile(file: File): Observable<UploadingImageModel> {
    return this.parseFileToBase64(file).pipe(
      map((base64: string) => new UploadingImageModel(base64, file.name))
    );
  }

  private static parseFileToBase64(file: File): Observable<string> {
    return new Observable<string>(subscriber => {
      const fileReader = new FileReader();

      fileReader.onload = event => {
        subscriber.next(event.target.result as string);
        subscriber.complete();
      }
      fileReader.readAsDataURL(file);
    })
  }

  constructor(
    public src: string,
    public filename: string
  ) {}

  public toJSON(): IUploadingImageJSON {
    return {
      src: this.src,
      filename: this.filename
    }
  }
}
