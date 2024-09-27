# Test

Note: The test function requires `mocha` and `chai` to be installed globally, otherwise it may not work:

``` bash
npm install -g mocha chai
```

### Unit Testing

Unit tests in Vusion can be written in multiple places.

In a single-file Vue, you can directly add the `<test>` tag:

``` xhtml
<script>
export default {
    name: 'u-select',
};
</script>

<test>
describe('Select', () => {
    it('should render correctly', () => {
        expect('foo').to.be.a('string');
    });
});
</test>
```

In multi-file Vue, you can add a `test.spec.js` file.

```js
describe('Select', () => {
    it('should render correctly', () => {
        expect('foo').to.be.a('string');
    });
});
```

You can add a file with the suffix `.spec.js` in the `test/unit` directory.

### Running the Tests

Run `vusion test`, Karma will retrieve all the unit test files mentioned above, start the Chrome browser by default and run the test cases.

- You can use the `-p` option to specify the port;
- You can use `-w, --watch` to watch file changes.

### Next Step

The next section will cover how to [package and deploy](/guides/deployment).