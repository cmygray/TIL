# 장고걸스 튜토리얼 정리

## ORM & QuerySets

10.30.(월)

모델 로드하기

```py
from <app_name>.models import <class_name>
```

`<class_name>.objects` 뒤에 이어서 사용하여 데이터 조회

* `.all()`
* `.filter(<field>=<keyword>)`
* `.filter(<field>__<operator>=<keyword>)`
* e.g.`Post.objects.filter(published_date__lte=timezone.now())` *lte(<=) *gte(>=)
* `.order_by(<field>)` *필드 앞에 `-` 연산자를 붙이면 내림차순 정렬 가능
* 체이닝 하면 && 연산. `Post.objects.filter(title__contains='test').order_by('-created_date')`

---

#오타 발견 목록

ORM & QuerySets

> title와 contains 사이에 있는 밑줄(_)이 2개(__)입니다. 장고 ORM은 필드 이름("title")과 연산자과 필터("contains")를 밑줄 2개를 사용해 구분합니다. 밑줄 1개만 입력한다면, FieldError: Cannot resolve keyword title_contains라는 오류가 뜰 거예요.

퀘리셋은... => 쿼리셋