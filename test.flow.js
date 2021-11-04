/* @flow */

// copy/paste of somebody else's code that throws "Unexpected token"
var x = (a: string, b: string): function =>
  async (dispatch: Function) => {
    dispatch(
      <span>
        {' '}
        <a href="hello">
          world
        </a>{' '}
      </span>
    );
};

// GitHub Support said to rewrite the arrow function as an ordinary function, but it still throws "Unexpected token"
function f(a: string) {
};

// let's see if CodeQL continues scanning here despite the errors above
document.body.innerHTML = document.location.href;
