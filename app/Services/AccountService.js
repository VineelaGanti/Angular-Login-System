webAdminApp.service('accountService', function () {

    var users = [{ userid: 1, username: 'satya', password: 'satya', email: 'satya@gmail.com', mobile: '12345' }];

    this.getUsers = function () {
        return users;
    }
    this.addUser = function (user) {
        var newid = users.length + 1;
        user.userid = newid;
        users.push(user);
    }

    this.getUserByName = function (username) {
        for (i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                return users[i];
                break;
            }
        }
        return null;
    }
    this.getUserById = function (id) {
        for (i = 0; i < this.users.length; i++) {
            if (this.users[i].userid == userid) {
                return this.users[i];
                break;
            }
        }
        return null;
    }

    this.validateUser = function (username, password) {

        var isValid = false;
        for (i = 0; i < users.length; i++) {
            if (users[i].username == username && users[i].password == password) {
                isValid = true;
                break;
            }
        }
        return isValid;
    }




    this.updateUser = function (user) {
        for (i = 0; i < users.length; i++) {
            if (users[i].userid == user.userid) {
                users[i] = user;
                break;
            }
        }

    }
    this.resetPassword = function (username, password) {
        var user = this.getUserByName(username);
        user.password = password;
        this.updateUser(user);

    }
});
