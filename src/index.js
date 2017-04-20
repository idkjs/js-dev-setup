/**
 * Created by devworx on 4/17/17.
 */
import './index.css'
import {getUsers, deleteUser} from './api/userApi'

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  })
  global.document.getElementById('users').innerHTML = usersBody

  // create var to hold all delete links selected off the DOM by getElementsByClassName
  const deleteLinks = global.document.getElementsByClassName('deleteUser')

  /* Must use array.from to create a real array from a DOM collection b/c getElementByClassName
  * only returns an "array like" object
  * */

  Array.from(deleteLinks, link => {
    link.onclick =  (event) => {
      const element = event.target
      event.preventDefault()
      deleteUser(element.attributes["data-id"].value)
      const row = element.parentNode.parentNode
      row.parentNode.removeChild(row)
    }
  })
})

