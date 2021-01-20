# loans

### To get started:

`npm i && npm run start`

runs on `http://localhost:8080/`

### Future considerations

- Better input validation
- currently I'm only using the built in `input` validation
- this would fix issues with numbers being in the format 10e^2 etc
- maybe use something like formik.

- Better design :/
- Maybe separate table from header and footer so if someone has ALOT of loans then they can see the titles without needing to scroll. How many loans do people usually have?
- close button for form
- move localStorage logic to a utils file, and keep closer to top level
- deal with null values better. error prompt maybe
