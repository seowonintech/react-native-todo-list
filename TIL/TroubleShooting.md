# 개요
이 항목은 작업을 수행하면서 나오는 문제점을 정리하기위한 section이다.

막혔던 모든 문제는 여기에 정리를 하며 답변을 찾았을 경우 웹링크가 있다면 링크와 함께 해결방안을 요약해서 정리해놓는 것을 목표로 한다.

## Redux의 reducer에서 함수 실행이 안되는 점
- Firebase를 연동하면서 reducer에서 push함수를 사용하였을 때 데이터베이스에 write를 하고 난 직후 error 가 발생하는 사항.

## Firebase에서 마지막 item을 web console에서 삭제하였을 때
- 마지막 항목을 삭제하였을 때 on() callback 함수가 호출되지 않는다.
  - 해결방안 : 해당 부분은 메뉴얼에 나온다
  - 데이터가 없는 경우 반환되는 스냅샷은 null입니다.
  - [참고링크](https://firebase.google.com/docs/database/web/read-and-write?hl=ko#listen_for_value_events)