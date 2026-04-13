import { BehaviorSubject } from "rxjs";

export class SubjectManager <T> {
  private subject: BehaviorSubject<T>;

  constructor(defaultSubject: T) {
    this.subject = new BehaviorSubject<T>(defaultSubject);
  }

  setSubject(subject: T): void {
    this.subject.next(subject);
  }

  getSubject(): BehaviorSubject<T> {
    return this.subject;
  }
}