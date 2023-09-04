import crypto from 'node:crypto';

export class User {
  private _id: string;
  private _name: string;
  private _email: string;

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  constructor(name: string, email: string, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this._name = name;
    this._email = email;
  }
}
