
import { Http } from '@angular/http';
import { map } from  'rxjs/operators';

export class TodoService { 
  constructor(private http: Http) { 
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(r => r.json()));
  }

  getTodos() { 
    return this.http.get('...').pipe(map(r => r.json()));
  }

  delete(id) {
    return this.http.delete('...').pipe(map(r => r.json()));
  }
}