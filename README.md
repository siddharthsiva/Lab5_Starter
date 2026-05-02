# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Siddharth Sivalanka

## GitHub Pages
- expose.html: [link here]
- explore.html: [link here]

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No because sending a message involves a lot of moving parts like the user typing, the app sending it over a network, and someone else receiving it. You can't really test all of that in a simple unit test since it depends on other systems working together.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes because it's a simple rule where you just check if the input is more than 80 characters. There's nothing else it depends on so you can easily test it by passing in strings of different lengths and checking if it returns the right answer.