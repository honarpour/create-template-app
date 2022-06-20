## Create Poly App

`create-poly-app`

---

About:

Clones a repo with existing configuration, then removes its origin.

Usage:

1. Install:

   ```
   npm i -g create-poly-app
   ```

2. Run: _(creates project in cwd)_

   ```
   create-poly-app <project_name> <new_origin?>
   ```

3. Add: _(skip if `new_origin` arg was provided in step 2)_

   ```
   git remote add origin <new_origin>
   ```

---

To do:

- [ ] Setup template repo and update url
- [ ] Validate args
- [ ] Publish to NPM
- [ ] Add option to choose type of project (different configs)
