import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set the todos property with the items returned from the server', () => {
    // arrange
    let todos = [1,2,3];
    // with a Jasmine Spy, you get control over a method in a class (does lots of stuff)
    spyOn(service,'getTodos').and.callFake(() => {
      return from([todos]);
    });

    // act 
    component.ngOnInit();

    // assert
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    // arrange
    let spy = spyOn(service,'add').and.callFake(t => {
      return empty();
    });

    // act
    component.add();

    // assert
    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    // arrange
    let todo = { id: 1 };
    // the returnValue syntax removes the need to define an arrow function
    let spy = spyOn(service,'add').and.returnValue(from([ todo ]));

    // act
    component.add();

    // assert
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property when server returns an error when adding a new todo', () => {
    // arrange
    let error = 'error from the server!';
    let spy = spyOn(service,'add').and.returnValue(throwError(error));

    // act
    component.add();

    // assert
    expect(component.message).toBe(error);
  });
});