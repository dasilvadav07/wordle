import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RectComponent } from '../rect/rect.component';

import { MatrixComponent, MatrixRow } from './matrix.component';

describe('MatrixComponent', () => {
  let component: MatrixComponent;
  let fixture: ComponentFixture<MatrixComponent>;
  let goal = "jouer";
  let matrixRow: MatrixRow;
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MatrixComponent, RectComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatrixComponent);
    component = fixture.componentInstance;
    component.goal = "jouer"
    matrixRow = new MatrixRow(component.goal);
    matrixRow.goal = component.goal;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if wrong word', () => {
    expect(matrixRow.verify("nouer")).toBeFalsy();
  })

  it('should verify if right word', () => {
    expect(matrixRow.verify("jouer")).toBeTruthy();
  })

  it('should verify wrong color', () => { 
    matrixRow.verify("boire");
    let currentRow = matrixRow.columns[4];
    expect(currentRow.status).toEqual('wrong');
  })

  it('should verify right color', () => { 
    matrixRow.verify("boire");
    let currentRow = matrixRow.columns[1];
    expect(currentRow.status).toEqual('correct');
  })
});
