import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms'

// again: describe(), it(), expect()
describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder);
  });

  it('should create a form with two controls', () => {
    // assert
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    // arrange
    let control = component.form.get('name');

    // act
    control.setValue('');

    // assert
    expect(control.valid).toBeFalsy();
  });
});