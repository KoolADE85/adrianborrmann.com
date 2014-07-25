adrianborrmann.com
==================

This is the personal website for Adrian Borrmann.

<http://www.adrianborrmann.com>

Setup Instructions
------------------

Obtain a copy of the database from the live site and place it in the root level of this repository beside this README file. The database should be called `database.db`.

Then, run these commands:

    cp settings_local.py.ex settings_local.py
    export PYTHONPATH=.:..:../lib/
    ./manage.py runserver 0:8000

Admin credentials are your normal personal login.
