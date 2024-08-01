# Lock Box

**Lock Box** — это веб-приложение для безопасного хранения и управления паролей к доступам проектов.

## Содержание

1. [Описание проекта](#описание-проекта)
2. [Функциональность](#функциональность)
3. [Требования](#требования)
4. [Установка](#установка)
5. [Запуск проекта](#запуск-проекта)

## Описание проекта

**Lock Box** предназначен для безопасного хранения и управления паролей к доступам проектов. Приложение позволяет пользователям создавать проекты, осуществлять поиск по проектам, добавлять доступы, а также просматривать, удалять и редактировать информацию о проектах и доступах.

## Функциональность

- **Управление проектами**: создание, просмотр, поиск, редактирование и удаление проектов.
- **Управление доступами**: добавление, редактирование и удаление доступов к проектам.
- **Авторизация и регистрация**: регистрация пользователей, вход в систему, выход из системы.
- **Восстановление пароля**: восстановление пароля посредством почты.
- **Демо-доступ**: возможность пощупать проект без регистрации.

## Требования

- Node.js >= 18.x
- Npm >= 9.8.1

## Установка

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/DZavg/lock-box-front
   ```
2. Перейдите в директорию проекта
   ```
   cd lock-box-front
   ```
3. Установите зависимости
   ```
   npm ci
   ```
4. Настройте файл .env

## Запуск проекта

1. Запустите сервер разработки
   ```
   npm run dev
   ```
2. Откройте браузер и перейдите по адресу
   ```
   http://localhost:3000
   ```
