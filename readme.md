# References

* https://github.com/ionic-team/ionic-pwa-toolkit
* https://stenciljs.com/
* https://facebook.github.io/jest/
* https://github.com/smooth-code/jest-puppeteer
* https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer

### Run single test

```typescript
describe('group name', () => {
  it('test name', async () => {
    //
  });
});
```

```bash
npm test -- e2e-attribute-basic.spec --testNamePattern 'test name'
```

```bash
npm run build --dev
```

    "@types/expect-puppeteer": "2.2.1",
    Has incorrect definition for toMatchElement
    Disallows
    ```
    text: 'Home' });
     await expect(page).toMatchElement('e2e-attribute-basic .single', { text: 'Singleaahh' });
    ```
