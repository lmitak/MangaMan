import {isNull} from 'util';

export class GestureRecognizer {
  public mouseDownEvent: MouseEvent;
  public mouseUpEvent: MouseEvent;

  private readonly CLICK_MAX_DURATION = 100;
  private readonly CLICK_MAX_OFFSET = 10;

  public isClickEvent(): boolean {
    this.checkMembers();
    const clickDuration = this.mouseUpEvent.timeStamp - this.mouseDownEvent.timeStamp;
    console.log(clickDuration);
    if (clickDuration < this.CLICK_MAX_DURATION || this.coordinatesWithinBounds()) {
      return true;
    }
    return false;
  }

  private checkMembers(): void {
    if (isNull(this.mouseDownEvent) || isNull(this.mouseUpEvent)) {
      throw new ReferenceError('Not all members are set');
    }
  }

  private coordinatesWithinBounds(): boolean {
    const point1 = {
      x: this.mouseDownEvent.x,
      y: this.mouseDownEvent.y
    };
    const point2 = {
      x: this.mouseUpEvent.x,
      y: this.mouseUpEvent.y
    };
    const hypotenuse = this.calculateHypotenuseFromPoints(point1, point2);
    return hypotenuse < this.CLICK_MAX_OFFSET;
  }

  private calculateHypotenuseFromPoints(point1: Coordinates, point2: Coordinates): number {
    const anglePoint = {
      x: point2.x,
      y: point1.y
    };
    const sideA = Math.abs(anglePoint.x - point1.x);
    const sideB = Math.abs(point2.y - anglePoint.y);
    return Math.hypot(sideA, sideB);
  }
}

interface Coordinates {
  x: number;
  y: number;
}
