# Structure-Generator

A simple dependencie to create a folder structure over given text file

[![Build Status](https://travis-ci.org/ramonmoraes/structure-generator.svg?branch=master)](https://travis-ci.org/ramonmoraes/structure-generator)

## Installing

```bash
$ npm install -g structure-generator
```

## How to use
```bash
$ structure-generator template-file-path
```

## Example
Consider this our project

```
src/
 index.js
structure.md
```

Which `structure.md` has this content
```
root/
  file.txt
  folder/
    file.txt
```

Then, simple execute:
```bash
$ structure-generator structure.md src
```

This will generate the given structure in the `structure.md` file, therefore our project will look like:

```
src/
  root/
    file.txt
    folder/
      file.txt
  index.js
structure.md
```

#
## Template file rules
1. To be considered a file, it __must__ have a `.(dot)` in it's name
2. A file to be considered "nested" __must__ have more padding at left then it's "father", before any non-space characters

# Contributing
1. Fork this project
2. Make the changes on your forked repository
3. Make sure the test are passing, running: 
```
npm test
```
4. Make a pull request ;D
