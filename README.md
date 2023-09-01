Hey Folks,

This is the code repo of an example for a Linkedin post of View Transition API.

## How to use:

In this example of how to use the View Transition API to create a simple fade-out transition:

```
const startTransition = () => {
document.startViewTransition(() => {
document.querySelector('.old-view').style.opacity = 0;
});
};

document.addEventListener('click', startTransition);
```

To learn more about this check this [Linkedin Post](https://www.linkedin.com/feed/update/urn:li:activity:7103366895575216129/)
