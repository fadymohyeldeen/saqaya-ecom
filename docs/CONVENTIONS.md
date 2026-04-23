# Conventions

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Naming

| Type          | Convention                   | Example                               |
| ------------- | ---------------------------- | ------------------------------------- |
| Components    | PascalCase, 2 words          | `ProductCard.vue`, `AppHeader.vue`    |
| Views         | PascalCase, 2 words + View   | `ProductsView.vue`, `ProductView.vue` |
| Layouts       | PascalCase, 2 words + Layout | `DefaultLayout.vue`                   |
| CSS files     | kebab-case                   | `global.css`, `variables.css`         |
| SVGs & images | kebab-case                   | `icon-cart.svg`, `icon-money-bag.svg` |
| Folders       | kebab-case                   | `single-product/`, `shared/`          |

Component names must be **exactly 2 words** — no more, no less. This avoids conflicts with native HTML elements and keeps things consistent.

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CSS

Always use BEM naming convention for class names

```css
Block: .product-card
Element: .product-card__image
Modifier: .product-card__image--active
```

- Use BEM in every scoped style block — no exceptions
- No generic names like `.title`, `.col`, `.container`

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Git

**Branch naming:**

```
feat/feature-name
fix/bug-name
chore/task-name
test/what-tested
refactor/what-changed
docs/what-documented
```

**Commit format** (Descriptive + Past Tense):

```
feat: added product filter by category
fix: removed duplicate API call on mount
refactor: moved slides data out of HeroBanner
```

Keep commits small and focused — one logical change per commit.

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Comments

- Use inline comments `ONLY` if the function name is not descriptive enough or the logic is complex
- Use section separators: `// --------------- Label ---------------` to separate logical blocks of code
