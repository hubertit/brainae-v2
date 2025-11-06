# Font Awesome Pro Setup Guide

This project is currently using Font Awesome Free. To upgrade to Font Awesome Pro:

## Prerequisites
- A valid Font Awesome Pro license from https://fontawesome.com/plans

## Installation Steps

1. **Configure npm registry for Font Awesome Pro:**
   ```bash
   npm config set "@fortawesome:registry" https://npm.fontawesome.com/
   ```

2. **Add your authentication token:**
   ```bash
   npm config set "//npm.fontawesome.com/:_authToken" YOUR_TOKEN_HERE
   ```
   You can find your token in your Font Awesome account settings.

3. **Uninstall free packages:**
   ```bash
   npm uninstall @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
   ```

4. **Install Pro packages:**
   ```bash
   npm install @fortawesome/pro-solid-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-thin-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-brands-svg-icons
   ```

5. **Update Icon component imports:**
   Edit `src/app/components/Icon.tsx` and replace:
   - `@fortawesome/free-solid-svg-icons` → `@fortawesome/pro-solid-svg-icons`
   - `@fortawesome/free-regular-svg-icons` → `@fortawesome/pro-regular-svg-icons`
   - `@fortawesome/free-brands-svg-icons` → `@fortawesome/pro-brands-svg-icons`

6. **Add Pro icon styles (if using Duotone):**
   The Duotone style requires additional CSS. Add to `src/app/globals.css`:
   ```css
   @import '@fortawesome/fontawesome-pro/css/all.css';
   ```

That's it! Your project will now use Font Awesome Pro icons.

