from flask import Flask, flash, redirect, render_template, request, session
from forms import LoginForm, RegisterForm

application = Flask(__name__)
application.config['SECRET_KEY'] = 'yikes'

@application.route('/')
def fetchIndex():
    return render_template('index.html')

@application.route('/login', methods=['GET', 'POST'])
def fetchLogin():
    form = LoginForm()
    if form.validate_on_submit():

        # set successful flash message
        flash('Login successful, {}!'.format(form.username.data))

        # attempt to log user in for real

        return redirect('/')
    return render_template('login.html', form=form)

@application.route('/register', methods=['GET', 'POST'])
def fetchRegister():
    form = RegisterForm()
    if form.validate_on_submit():
        
        # add user to database and log user in

        # set successful flash message
        flash('Successfully created account, {}!'.format(form.username.data))

        return redirect('/')
    return render_template('register.html', form=form)

if __name__ == '__main__':
    application.run()
