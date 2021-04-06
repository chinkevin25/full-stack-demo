# STEP 2: Creating a simple route

Let's now create a simple route on our server. After we get an understanding of what is going on, we can create more complex routes.

# Testing our simple route
There are a few options to test our API. The least amount of overhead is by using `curl`.

```sh
curl -X GET 127.0.0.1:3000/api/cohort/107
> HRSF-107 is the best
```

```sh
curl -X GET 127.0.0.1:3000/api/cohort/100
> HRSF-100 is the worst
```
We can also use Postman to test out end point.

![Postman Method](https://i.imgur.com/njJRgZs.png)
