[![Build status](https://ci.appveyor.com/api/projects/status/redtte3xsncrydov/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/hoc-highlight/branch/main)

[![Netology AHJ](https://github.com/natalia-smyslova/hoc-highlight/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/hoc-highlight/actions/workflows/web.yml)

[ДЕМО](https://natalia-smyslova.github.io/hoc-highlight/)

Подсвечивание блоков
===

На нашем сайте есть блоки со статьями и с видеозаписями. 

![Highlight](https://github.com/natalia-smyslova/ra16-homeworks/raw/master/hoc/highlight/assets/highlight.png)

Мы решили улучшить отображение наших блоков таким образом, чтобы популярные статьи и видео, у которых 1000+ прочтений или просмотров,
оборачивались в компонент `Popular`, а с количеством до 100 — в компонент `New`. Эти компоненты будут менять внешний облик блоков, привлекая внимание посетителей.

## Реализация

Используя HOC, обернуть `Video` и `Article` таким образом, чтобы при отображении в компоненте `List` они помещались внутрь требуемого компонента `Popular` или `New`.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из каталога в качестве отправной точки. Замените ими те, что создаются в create-react-app.

