import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, empty, throwError, Observable } from 'rxjs';

// IMPORTANT: to disable tests, put an 'x' in front of the it()
// or the describe() to disable the entire suite

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

  it('should call the server to delete a todo item if the user confirms', () => { 
    // arrange
    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(empty()); // this is an empty observable

    // act
    component.delete(1);

    // assert
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1); // this is a bit more specific and checks if the Act parameter was used in the service call
  });
  
  it('should NOT call the server to delete a todo item if the user cancels', () => { 
    // arrange
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service,'delete').and.returnValue(empty()); // this is an empty observable

    // act
    component.delete(1);

    // assert
    expect(spy).not.toHaveBeenCalled();
  });
});