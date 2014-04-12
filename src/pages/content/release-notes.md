## Release Notes

Starting from v0.7.0, I'm going to start getting more semantic with my versioning. Since everything I'm adding is a new feature, you are going to see the minor number of my version increase a lot faster. I'm also going to try to separate out the development of plugins from the core Wallboardr.

I'm also going to try and tag my releases in the future.

### v0.7.0

* [Feature] You can schedule message screens to only show up between two dates optionally filtering it further to certain times of certain days of the week.

### v0.6.0

* [Feature] You can preview a screen before you save it in the Admin UI.
* [Feature] You can cycle through the screens using the keyboard.
* [Feature] Displaying boards indicate if they don't have a web socket connection.

### v0.5.3

* [Feature] Users can now change their passwords

### v0.5.2

* [Feature] Support editor role for users (no UI to create them yet)

### v0.5.1

* [**Plugin**] Created Image screen type

### v0.5

* [**Plugin**] Created TeamCity screen type

### v0.4.x

* [Feature] All boards can be told to completely reload the page to get any code updates, etc.
* [Feature] All boards can be refreshed from one menu item now
* [Feature] Screens can now load remote data periodically while being displayed
* [Feature] Screen types are now managed as plugins, only one of which is included (the message screen)
* [Change] The URL at which boards are viewed has changed (`/view.html#slug`)
* [Maintence] Switched from Sproute to Deployd as a server-side platform
* [**Plugin**] Created Octopus Deploy screen type
* [**Plugin**] Created Twitter screen type

### v0.3.0

* [Feature] You can now unlink shared screens from all but one of its boards.
* [Maintence] Restructured controllers for better separation.

### v0.2.0

* [Feature] Screen sharing! You can now share screens between different boards, which means less duplication.
* [Bug fix] You can now add more than one screen per application load
* [Bug fix] Multiple screens with dynamic sizing no longer interfere with each other.
* [Bug fix] When changing boards or screens, opened forms are now closed.

### v0.1.1

* [Bug fix] You can refresh remote running boards which only have a single active screen.

### v0.1.0

* Initial release with message screens, very basic user management, board refresh and other exciting features!
