// // List of commands that require API calls

import { getProjects } from '../api';
import { getPoem } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const poem = async (args: string[]): Promise<string> => {
  const data = await getPoem();
  return `Allow me to introduce you to a Chinese poem.\n
  ${data.poem}`;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather chengdu';
  }
  const weather = await getWeather(city);
  return weather;
};
