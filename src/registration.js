import { register } from './registry.js'
import * as Hello from './components/Hello'
import * as ListOfUsers from './components/ListOfUsers'
import * as Fixed from './components/Fixed'

register('hello', Hello.schema, Hello.component);
register('userlisting', ListOfUsers.schema, ListOfUsers.component);
register('fixed', Fixed.schema, Fixed.component);