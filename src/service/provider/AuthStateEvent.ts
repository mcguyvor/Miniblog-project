import { EventEmitter } from 'events'
import User from '../../model/User'

export default interface AuthStateEvent extends EventEmitter {
    on(event: 'login', listener: (user: User) => void): this;
    on(event: 'logout', listener: () => void): this;
    on(event: 'error', listener: (error: Error) => void): this;

    emit(event: 'login', user: User): boolean;
    emit(event: 'logout'): boolean;
    emit(event: 'error', error: Error): boolean;
}
