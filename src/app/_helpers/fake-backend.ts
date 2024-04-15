import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { FileData } from '../_models/FileData';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/files') && method === 'GET':
                    return getAllFiles();
                case url.endsWith('/file/update') && method === 'POST':
                    return updateFiles();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        function getAllFiles() {
            const data = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
            return ok(data);
        }

        function updateFiles() {
            return ok(null);
        }

        // helper functions

        function ok(body?:any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: any) {
            return throwError({ error: { message } })
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};


function createNewUser(id: number): FileData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      file: name,
      date: new Date().toISOString(),
      size: SIZE[Math.round(Math.random() * (SIZE.length - 1))],
    };
  }

  /** Constants used to fill up our data base. */
const SIZE: string[] = [
    '52.784 Kb',
    '5.4 Kb',
    '20.1 Kb'
  ];
  const NAMES: string[] = [
    'media',
    'screenshots',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
  ];