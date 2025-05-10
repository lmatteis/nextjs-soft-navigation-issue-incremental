# Soft navigation on static route isn't incrementally renderer

I have a static route which is huge for purpose of testing incremental rendering. It's rendering a huge number (~400kb) after which it renders a text "Done!" (I'm using HTTP2 setup to allow for streaming in raw data)

When turning off javascript (getting the raw HTML) behavior is as expected. Number is shown and "Foo" route appears streamed in after which the "Done!" text appears (simulating 4g connection). Meaning I can see the top content immediately as the number streams in:

https://github.com/user-attachments/assets/33ecf892-3dbd-44a6-b7aa-23ad00c7d7cb

With javascript on however, using soft navigation, this doesn't happen. The entire page just hangs there without the header text changing or the number changing. And it all appears at the end - all at once:

https://github.com/user-attachments/assets/31b80693-9d16-467b-b26c-bf6ea6523705

Note that this has nothing to do with Suspense streaming. It's just standard browser HTTP transfer and HTML rendering at play. My feeling is that the soft navigation uses the RSC streaming format, which is received in chunks (via HTTP2), but doesn't know what to render and when to render it... while HTML+browser knows better how to incrementally render things even if it doesn't have a complete tree yet.

Thoughts?

```bash
npm i
```

Create the public and private keys:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```

```
npm run dev
```
