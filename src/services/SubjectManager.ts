import { Subject } from "rxjs";

export class SubjectManager <T> {
  private subject: Subject<T>;

  constructor() {
    this.subject = new Subject<T>();
  }

  setSubject(subject: T): void {
    this.subject.next(subject);
  }

  getSubject(): Subject<T> {
    return this.subject;
  }
}