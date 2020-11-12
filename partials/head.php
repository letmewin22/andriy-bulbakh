<!DOCTYPE html>
<html lang="en" class="custom">

<head>
  <meta charset="utf-8">
  <title>Title</title>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#131116">
  <link rel="icon" href="{% if lang %}.{% endif %}./img/favicon.ico" type="image/x-icon">
  <meta name="description" content="{% if description %}{{ description }}{% else %}Template{% endif %}">
  <meta property="og:title" content="{% if title %}{{ title }}{% else %}Template{% endif %}">
  <meta property="og:description" content="{% if description %}{{ description }}{% else %}Template{% endif %}">
  <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri() ?>/css/app.css">
</head>