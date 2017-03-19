# Today I Learned
배운 것을 기록하고, 공유하자

## 작성 규칙
나는 [milooy/TIL](https://github.com/milooy/TIL)을 참고했는데 이분은 [thoughtbot til](https://github.com/thoughtbot/til)를 참고하셨다.

- 문서 생성은 [GFM (Github Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown/) 을 사용한다. (확장자 `.md`)
- 언어나 기술명으로 폴더를 만든다. (root에 문서를 만들지 않는다.)
- 파일명은 영어로.


### 좋은 TIL 작성법
[Writing a good a TIL 참고](https://github.com/thoughtbot/til/blob/master/CONTRIBUTING.md)

- 컨텐츠 당 60줄 이상 피하자
- 2개 이상의 예제
- 너무 자세한건 피하자(투머치ㄴㄴ)
- [가이드](https://github.com/thoughtbot/guides)를 위반하지마라

## 로컬에서 사용

### gollum

**Deprecated**

- 리눅스(우분투)에 ruby 깔고 gollum 깔고
- git clone TIL
  + [Use HTTPS](https://github.com/qvil/TIL.git) `https://github.com/qvil/TIL.git`
  + [Use SSH](git@github.com:qvil/TIL.git) `git@github.com:qvil/TIL.git`
- gollum 실행
```shell
$ cd TIL gollum
$ gollum
```
- 브라우저에서 [localhost:4567](http://localhost:4567) 접속

### VSCode

**Recommended**

Auto-Open Markdown Preview 이용해서 수정하고 바로 커밋찍는게 짱임.
