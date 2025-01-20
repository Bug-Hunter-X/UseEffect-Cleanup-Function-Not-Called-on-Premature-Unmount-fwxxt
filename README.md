# useEffect Cleanup Function Not Called on Premature Unmount

This repository demonstrates a subtle bug related to the cleanup function in React's `useEffect` hook.  The issue arises when a component is unmounted before the asynchronous operation within the `useEffect` has completed.

## Bug Description
The provided `MyComponent` utilizes `useEffect` to log messages on mount and unmount. However, if the component is quickly unmounted (e.g., due to a parent component's state change), the 'Unmounted!' message may not be logged, indicating that the cleanup function was not executed.  This can lead to memory leaks or other unexpected behavior.

## Reproduction
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output.  Rapidly switching between states that mount and unmount the component may reveal the bug.

## Solution
The solution involves ensuring that any cleanup actions are performed even if the component unmounts before the asynchronous operation finishes. This is typically addressed by using cleanup functions within `useEffect` hooks that manage asynchronous operations.  This often requires setting up a way to abort the asynchronous operation or ensuring that cleanup functions always execute.