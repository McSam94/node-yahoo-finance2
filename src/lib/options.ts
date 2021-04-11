// TODO, keep defaults there too?
import type { ValidationOptions } from "./validateAndCoerceTypes";
import type { QueueOptions } from "./queue";

export interface Options {
  queue: QueueOptions;
  validation: ValidationOptions;
}

const options: Options = {
  queue: {
    // See https://github.com/sindresorhus/p-queue for all options
    concurrency: 4, // Min: 1, Max: Infinity
    timeout: 60,
  },
  validation: {
    logErrors: true,
    logOptionsErrors: true,
  },
};

export default options;
