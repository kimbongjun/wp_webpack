# wp_webpack

워드프레스 웹팩 적용

```
참고 : (https://medium.com/q-software/webpack-4-wordpress-9cada8f2647){:target="_blank"}

```

1. themes/테마이름/resources
2. build 적용 시 assets 경로에 파일이 자동 생성된다.
3. function.php

- 빌드 된 js,css 파일 function.php 에 적용
  function wp4wp_scripts() {
  wp_enqueue_style('main_css', get_template_directory_uri() . '/assets/styles/main.css', array(), '1.0', false);
  wp_enqueue_script('main_js', get_template_directory_uri() . '/assets/scripts/main.js', array(), '1.0', true);
  }
  add_action('wp_enqueue_scripts', 'wp4wp_scripts');

```

```
