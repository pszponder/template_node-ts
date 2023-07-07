/**
 * Sleep for a given number of milliseconds
 *
 * @param {number} ms - The number of milliseconds to sleep
 * @returns {Promise<void>} A promise that resolves after the sleep duration
 */
export async function sleep(ms: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}

/**
 * Invokes an async callback function after specified delay
 *
 * @param {number} delay - The number of seconds to wait before invoking the async callback
 * @param {function(): Promise<void>} asyncCallback - Async callback to invoke after timeout completes
 */
export async function invokeAfterDelayAsync(
    delay: number,
    asyncCallback: () => Promise<void>,
) {
    await sleep(delay * 1000);
    await asyncCallback();
}
