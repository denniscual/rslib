import { loadConfig } from '../config';
import type { RslibConfig } from '../types';
import { getAbsolutePath } from '../utils/helper';
import type { CommonOptions } from './commands';

export async function loadRslibConfig(options: CommonOptions): Promise<{
  content: RslibConfig;
  filePath: string;
}> {
  const cwd = process.cwd();
  const root = options.root ? getAbsolutePath(cwd, options.root) : cwd;

  return loadConfig({
    cwd: root,
    path: options.config,
    envMode: options.envMode,
  });
}