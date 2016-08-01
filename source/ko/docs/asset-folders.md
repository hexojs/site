title: Asset Folders
---
## 전역 Asset 폴더

Asset은 포스트 파일이 아니며 `source` 폴더에 위치합니다. 이미지, CSS, JavaScript 파일이 이에 해당합니다. 예를 들어, Hexo에서 이미지 파일을 사용하고 싶을 때 간단하게 `source/images` 디렉토리에 넣어두면 됩니다. 포스트 내에서 사용하고 싶을 때는 그냥 이렇게 부르면 됩니다. `![](/images/image.jpg)`

## Post Asset 폴더

꾸준히 이미지 또는 다른 asset들을 제공해야 하고 포스트 단위로 asset을 관리하고 싶어하는 사용자들을 위해 Hexo는 asset을 관리할 수 있는 방법을 제공합니다. `_config.yml` 파일의 `post_asset_folder`을 true로 설정하면 됩니다.

``` yaml _config.yml
post_asset_folder: true
```

Asset 폴더 관리 기능을 활성화 시켰다면, Hexo는 당신이 `hexo new [layout] <title>` 명령어로 새로운 포스트를 생성할 때마다 새 폴더를 생성합니다. 이 asset 폴더는 post의 markdown 파일명과 동일한 이름으로 생성됩니다. 당신의 post와 연관된 모든 asset들이 이 폴더에 위치하게 되고 상대 경로를 통해 이들을 사용할 수 있습니다.

## 상대 경로 참조를 위한 태그 플러그인

일반적인 markdown 구문에서 상대 경로를 사용하여 이미지 또는 다른 asset 파일들을 참조할 때 아카이브 또는 인덱스 페이지에서 이를 표시하지 못하는 문제가 있습니다. Hexo 커뮤니티에서는 Hexo 2에서의 이 주소 문제를 해결하기 위해 플러그인을 만들었습니다. 하지만, Hexo 3의 릴리즈와 함께 몇몇 새로운 태그 플러그인들이 코어에 추가되었습니다. 이 플러그인들은 asset들을 더 쉽게 참조할 수 있도록 도와줍니다.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

예를 들어, post asset 폴더가 활성화 상태 일 때 `example.jpg` 파일을 asset folder에 넣어놓고 `![](/example.jpg)` 구문으로 상대 경로를 사용하여 참조한다면 이 이미지는 인덱스 페이지에서 *보이지 않을 것*입니다. (하지만, 포스트 내부에서는 정상 동작할 것 입니다.)

이미지 참조의 올바른 방법은 markdown 대신 태그 플러그인 구문을 사용하는 것 입니다.

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

이 방법을 통해, 이미지 파일은 포스트 내부나 인덱스 페이지나 아카이브 페이지에서 모두 정상적으로 표시될 것 입니다.
