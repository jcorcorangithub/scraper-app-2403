const puppeteer = require("puppeteer");
const fs = require("fs");
const pdf = require("pdf-parse");

const verraProjectsUrl = 'https://registry.verra.org/app/search/VCS';

const browser = await puppeteer.launch();


export const myString = 'export from verraPuppeteer file';