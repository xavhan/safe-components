import { register } from './registry.js'
import * as Hello from './components/Hello'
import * as ListOfUsers from './components/ListOfUsers'

register('hello', Hello.schema, Hello.component);
register('userlisting', ListOfUsers.schema, ListOfUsers.component);