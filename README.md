# Lab 8 - Starter

Grant Cheng

## Check Your Understanding

1. Automated tests should be ran in a Github action that runs whenever the code is pushed. That way, if something is broken, Github actions will keep a log of exactly which commit broke the tests, allowing for the bug to be easily traceable. Preferably, people will manually run the tests on their own machines as well, but not only is that not 100% reliable (because people will forget to run tests before pushing code sometimes), having it in the CI is a lot more safer.
2. No, because end-to-end testing tests the entire app as a whole. To check a specific function, you would use unit testing, which tests individual components of your app (like a function).
3. No, because the message feature of an app is a relatively large-scale process that can require multiple steps and have multiple components interact with each other. This feature would be more suitable for an end-to-end test.
4. Yes, because this is a small scale feature that can be easily tested without having to test the interaction of multiple components.
