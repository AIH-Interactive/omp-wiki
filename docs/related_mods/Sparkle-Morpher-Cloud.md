---
sidebar_position: 2
sidebar_label: SPM Cloud
title: SPM Cloud
description: Sparkle-Morpher Cloud 共享背后的可选服务，涵盖实例、账户、模型库、访问控制与自建部署。
---

# SPM Cloud

SPM Cloud 是 Sparkle-Morpher Cloud 模型共享背后的可选服务。它保存账户、共享模型库、访问权限以及客户端同步的显示状态，并内置管理网站。它与 Minecraft 服务器相互独立：游戏服务器不会访问 Cloud，Cloud 也不会改变游戏逻辑。只使用本地模型时不需要它。

> **注意：** SPM Cloud 与模组是两个独立项目。当前版本与依赖要求请查看 [spm-cloud 仓库](https://github.com/sdf123098/spm-cloud)。

## 玩家快速开始

1. 从实例运营者处获取 Cloud 根地址。自建实例的根地址就是它的公开根 URL，不带 `/admin/`、`/account/` 或 `/v1`。
2. 在 SPM 中打开 **Cloud 实例与账户**，如果实例尚未列出就先添加，然后选中它。
3. 注册或登录，并绑定你当前正在使用的 Minecraft 身份。
4. 浏览该实例的模型库并选择模型。模型库可能包含你上传的模型、公开模型以及别人授权给你的模型。
5. 如果希望其他玩家收到你的外观，请保持隐私模式关闭。

部分实例需要管理员审批绑定后才能使用。没有安装 SPM 的玩家看到的仍是你的普通 Minecraft 外观。

## Cloud 共享的条件

Cloud 共享独立于 Minecraft 服务器。要让另一名玩家通过 Cloud 看见你的模型，需要同时满足：

| 条件 | 原因 |
| --- | --- |
| 双方都安装了 SPM | 只有 SPM 客户端会渲染 SPM 模型。 |
| 双方连接同一个 Cloud 实例 | 账户、模型与身份绑定按实例独立。 |
| 双方已登录并绑定当前游戏身份 | Cloud 需要确认是哪个玩家在请求模型。 |
| 模型是公开的，或对方被明确授权访问 | 私有模型不会仅因为你选择了它就共享；需要通过实例的目标 / ACL 授权，或把模型设为公开。 |
| 隐私模式已关闭 | 隐私模式会阻止 Cloud 与 P2P 同步。 |
| 客户端使用兼容的 Cloud 协议 | 协议版本不一致时可能无法同步。 |

满足条件后，对方客户端会自动下载并渲染有权访问的模型；受支持的模型设置以及转盘、待机动作也会同步。

仅在本地导入的模型不会自动上传或共享。Cloud 模型也不会通过 P2P 转发；只存在于本地的模型会一直留在本地，直到你上传或授权。

## 官方实例与社区实例

SPM 内置官方 Cloud 实例，也可以连接社区或自建实例。每个实例都有独立的账户、模型库、身份绑定与权限，切换实例不会迁移模型库或绑定。

要添加社区实例，打开 **Cloud 实例与账户**，选择 **添加社区 Cloud**，然后填写实例 ID、名称与地址。实例 ID 需要在该地址下保持唯一。

由于各实例彼此独立，模型库不能直接在实例之间迁移；客户端与实例的协议版本不一致时也可能无法同步。

## 账户、角色与身份绑定

每个实例都维护自己的账户。实例服主管理服务与角色，管理员管理模型，普通成员使用被允许访问的模型与功能。实例可以开放或关闭自助注册；关闭时由服主创建账户并私下分发凭据。

要共享外观，先登录并绑定你当前正在使用的 Minecraft 身份。实例可以支持 Microsoft 登录与 LittleSkin 等第三方 Yggdrasil 服务，部分实例还需要管理员审批绑定。绑定身份不会获得管理员权限，也不会转移模型所有权。

Cloud 账户、游戏身份与密码独立于 Minecraft，也独立于其他实例。请保管好自己的密码，不要分享实例的初始令牌——那是运营者的凭据。

## 模型库与访问权限

上传可以是公开的，会出现在社区 Cloud 搜索中；也可以是私有的，不会出现在搜索结果里。私有模型仍可通过明确授权共享；在你自己的客户端上选择某个模型，并不会把访问权授予其他玩家。公开与私有只描述可见性，不改变谁可以编辑或删除上传内容。

上传任务会进入队列，并显示进度与失败原因。上传格式与本地导入一致，`.zip` 也可以打包一整套模型。实例可能限制单个文件的大小、扫描上传纹理，或要求安装加密模型解析程序才能预览 `.ysm` 文件。在服务器上删除模型会停止正常下载，但通常可以由运营者恢复。

实例可以用目标与 ACL 条目管理玩家、假人、女仆与载具的访问。你能看到或修改哪些条目，取决于实例与你自己的角色。模型文件保存在实例上，而不是 Minecraft 服务器上。

## 实例可启用的功能

Cloud 同步的不只是基础玩家模型。取决于实例与客户端构建，它还可以提供绑定假人与女仆的显示动作、玩家显示状态、载具绑定以及弹射物外观快照。这些功能需要在服务端开启，并要求客户端支持；开启某项功能不会自动安装或更新模组。

## 自建部署

Cloud 服务是独立项目 [spm-cloud](https://github.com/sdf123098/spm-cloud)，既不属于模组，也不需要运行在 Minecraft 服务器上。本节给出一条最小可用的搭建路径；完整选项、配置字段与恢复流程见仓库 README。

### 准备工作

- 一台长期在线的机器。通常用 Linux 服务器；Windows 和 macOS 也适合小型私人实例。
- 如果玩家通过互联网连接，需要一个域名；仅内网测试用局域网地址即可。
- 一个提供 HTTPS 的反向代理，例如 Caddy 或 Nginx。服务本身只通过 HTTP 监听。
- HTTP 监听端口（默认 8787），以及代理使用的 80/443。
- 一个与服务器分离的备份位置。

数据库、模型对象目录与凭据文件必须放在持久化存储上。它们才是实例的状态，只有程序与配置无法恢复实例。

### 方式一：Windows

1. 从 [spm-cloud Releases](https://github.com/sdf123098/spm-cloud/releases) 下载 Windows ZIP 与校验文件，核对校验值后解压到 `C:\SPMCloud` 之类的目录。
2. 在 PowerShell 中初始化配置：

```powershell
cd C:\SPMCloud
.\spm-cloud.exe --version
.\spm-cloud.exe --init-config C:\SPMCloud\config.json
```

初始化会创建 `config.json` 与 `secrets\bootstrap-token.txt`。已有实例不要重复执行；它不会重置密码。

3. 检查并启动服务：

```powershell
.\spm-cloud.exe --config C:\SPMCloud\config.json --check-config
.\spm-cloud.exe --config C:\SPMCloud\config.json
```

4. 在同一台机器打开 `http://127.0.0.1:8787/admin/`，用初始令牌登录。
5. 对外开放前，设置公开 HTTPS 地址与固定的实例 ID，把反向代理放到前面，并重启。

服务运行时终端必须保持打开。若需无人值守启动，用 Windows 服务管理器或任务计划程序注册该可执行文件；程序不会自动安装服务。

### 方式二：Docker Compose

适用于安装了 Docker Engine 与 Compose 插件的 Linux。Windows Docker Desktop 与 NAS 面板的宿主机路径和网络不同，需要按实际情况调整命令，不要直接复制。

```bash
sudo git clone https://github.com/sdf123098/spm-cloud.git /opt/spm-cloud
cd /opt/spm-cloud
sudo docker compose -f docker-compose.json.yml build spm-cloud
sudo install -d -o 10001 -g 10001 -m 700 deploy/runtime
sudo docker compose -f docker-compose.json.yml run --rm --no-deps spm-cloud --init-config /etc/spm-cloud/config.json
```

然后编辑 `deploy/runtime/config.json`，保留生成的其他设置：

```json
{
  "schema_version": 1,
  "instance": {
    "instance_id": "my-cloud",
    "origin": "https://cloud.example.com",
    "bind": "0.0.0.0:8787",
    "trusted_proxy_ips": ["172.30.10.3"]
  },
  "storage": {
    "backend": "sqlite",
    "data_dir": "/var/lib/spm-cloud/data",
    "database_path": "/var/lib/spm-cloud/data/spm-cloud.db",
    "object_dir": "/var/lib/spm-cloud/objects"
  },
  "auth": {
    "bootstrap_account_id": "account_local",
    "bootstrap_access_token_file": "secrets/bootstrap-token.txt",
    "allow_self_registration": true
  }
}
```

在 `Caddyfile.compose` 中使用同一域名，把 `reverse_proxy` 指向 `spm-cloud:8787`，并保留客户端 IP 转发头。然后检查并启动：

```bash
sudo docker compose -f docker-compose.json.yml run --rm --no-deps spm-cloud --config /etc/spm-cloud/config.json --check-config
sudo docker compose -f docker-compose.json.yml up -d
sudo docker compose -f docker-compose.json.yml logs --tail 100 spm-cloud caddy
```

不要用 `docker compose down -v` 修实例：`-v` 可能删除保存数据库与模型的卷。

### 方式三：原生 Linux 或 macOS

1. 按架构（`x86_64` 或 `aarch64`/`arm64`）下载压缩包，核对校验值后解压。
2. 安装程序、创建服务账户与数据目录，并初始化配置：

```bash
sudo install -m 755 ./spm-cloud /usr/local/bin/spm-cloud
sudo useradd --system --home /var/lib/spm-cloud --create-home --shell /usr/sbin/nologin spm-cloud
sudo install -d -o spm-cloud -g spm-cloud -m 750 /etc/spm-cloud /var/lib/spm-cloud/data /var/lib/spm-cloud/objects
sudo -u spm-cloud /usr/local/bin/spm-cloud --init-config /etc/spm-cloud/config.json
```

3. 在 `/etc/spm-cloud/config.json` 中设置公开根地址、固定实例 ID 与监听地址。原生实例通常绑定 `127.0.0.1:8787`，由同机代理转发。
4. 以服务账户运行 `spm-cloud --config /etc/spm-cloud/config.json --check-config`。
5. Linux 上把仓库中的 `deploy/spm-cloud-json.service` 复制到 `/etc/systemd/system/`，按需修改路径，然后重新加载并启用该单元。macOS 使用 launchd 或其他进程管理器。

### 关键配置

- `instance.instance_id`：实例的固定名称。不要随意修改，并保证它在玩家使用的地址下唯一。
- `instance.origin`：公开根地址，例如 `https://cloud.example.com`，不带 `/admin/`、`/account/` 或 `/v1`。
- `instance.bind`：HTTP 监听地址。同机代理后面用 `127.0.0.1:8787`，容器网络内用 `0.0.0.0:8787`。
- `instance.trusted_proxy_ips`：反向代理的地址，不是玩家地址。
- `storage.data_dir`、`storage.database_path`、`storage.object_dir`：数据库与模型的位置，必须在升级后继续保留。
- `auth.bootstrap_access_token_file`：服主初始令牌文件，注意保密。

每次启动前运行 `--check-config`。修改公开地址、监听地址、数据库或对象目录后通常需要重启。

### HTTPS 与反向代理

玩家与管理员都应通过 `https://` 访问。服务不签发证书，因此在 Caddy 或 Nginx 上终止 TLS 并转发到监听端口。使用 Nginx 时，需要代理 `/admin/`、`/account/`、`/v1` 与 `/v1/realtime`，保留 HTTP/1.1 与 WebSocket 升级头，并把请求体上限设得高于实例的模型上限（例如单文件 128 MiB 时用 `client_max_body_size 136m;`）。

由内向外检查：先访问监听端口上的 `/health`，再看代理日志，最后从其他网络访问 `https://YOUR-DOMAIN/health` 与 `/admin/`。

### 首次登录

1. 打开 `https://YOUR-DOMAIN/admin/`。
2. 在服务器上读取 `secrets/bootstrap-token.txt`，把完整一行粘贴到初始令牌输入框。
3. 立即修改服主密码，并保持服主账号 ID 稳定。
4. 为玩家创建账户，或开启自助注册让他们自行注册。
5. 决定绑定的游戏身份是否需要管理员审批。
6. 可选：添加身份验证提供方，例如使用自己的 Entra 应用配置 Microsoft 登录，或接入 LittleSkin 等 Yggdrasil 服务。

初始令牌是运营者凭据，不是玩家密码。不要发到聊天、截图、issue 或仓库中。

### 让玩家连接

把根地址发给玩家。玩家在 SPM 的 **Cloud 实例与账户** 中添加、选中该实例，注册或登录并绑定 Minecraft 身份，随后就能看到公开或授权给自己的模型。若对方看不到某个模型，请同时检查模型可见性、ACL 条目与身份绑定。

### 上传与授权

通过管理网站上传的模型会进入实例的模型库，而不是 Minecraft 服务器。选择公开或私有；私有模型需要通过目标或 ACL 授权。模型库还会显示处理、审核与预览状态，因此刚上传的文件不一定立即可用。

### 备份与升级

配置、数据库、模型对象目录、`secrets/` 与 `.managed-secrets/` 必须一起备份。只备份数据库无法恢复模型文件，只备份模型文件也无法恢复账户与权限。建议先在另一台机器上演练一次恢复。

升级时停止服务，替换可执行文件或镜像，运行 `--check-config`，再启动。请阅读发行说明了解配置迁移，并在新版本能正常提供账户与模型之前保留旧数据。

其他实例选项：

- **缓存：** 默认使用内存；可以选用 Redis。
- **内容安全：** 可以对上传模型做可选的纹理扫描，使用项目附带的扫描适配器或兼容服务。
- **加密模型：** 安装 YSMParser 后，实例可以解析并预览加密的 `.ysm` 文件。
- **数据库：** 默认 SQLite；规模较大时可以用 MySQL。

注册方式、身份验证提供方、角色、模型上限、审核策略以及启用哪些客户端功能，都由实例运营者决定。管理界面目前使用中文标签。希望共享模型的玩家必须连接同一实例，因此社区实例只对愿意使用同一实例的人有效。

## 隐私与运维注意事项

- 隐私模式会同时阻止 Cloud 与 P2P 同步。开启期间，其他玩家不会收到你的模型。
- Cloud 服务中断时，共享与新模型下载可能失败，但本地模型仍然可用。
- 修改自建实例的公开地址、数据库或对象目录会影响所有玩家，并且可能需要重启服务。
- 升级或恢复前，应先备份数据库、模型文件与凭据文件。

## 常见问题排查

| 问题 | 检查项 |
| --- | --- |
| Cloud 无法连接 | 检查根地址、DNS 与 TLS、反向代理、网络与代理、实例状态以及游戏日志。 |
| 其他玩家看不到我的模型 | 检查双方的 SPM 版本、所选实例、登录状态、身份绑定、模型可见性或 ACL、隐私模式与 Cloud 协议。 |
| 登录或绑定身份失败 | 检查验证提供方是否启用、账户是否已有 Minecraft 角色、是否需要审批，以及提供方自身的状态。不要用删库来修复绑定。 |
| 上传失败 | 检查文件格式与大小、反向代理的请求体上限、审核结果，以及实例的剩余空间或处理能力。 |
| 上传的模型没有预览 | 加密的 `.ysm` 需要服务端解析程序；其他预览可能仍在处理，或已被关闭。 |
| 更换服务器后模型库像是空的 | 检查配置的数据库与对象目录；连接到新的空数据库会表现为空模型库。 |

## 常见问题

### 必须使用 SPM Cloud 吗？

不需要。本地模型、模型面板与动画转盘都不依赖 Cloud。只有基于 Cloud 的共享与浏览需要它。

### 不配置 Cloud 能使用 SPM 吗？

可以。只有在想通过实例共享模型或浏览其模型库时才需要 Cloud。

### 可以自己搭实例吗？

可以。[spm-cloud](https://github.com/sdf123098/spm-cloud) 项目支持 Windows、Docker Compose 以及 Linux 或 macOS 原生部署，搭建步骤见 [自建部署](#自建部署)。运营者可以控制账户、角色、限制、审核策略与启用的客户端功能。玩家需要使用兼容的客户端连接你的实例。

### Cloud 会改变游戏逻辑或权限吗？

不会。Cloud 只负责账户、模型、模型访问权限与显示同步。碰撞箱、服务器规则与游戏权限仍由 Minecraft 服务器决定。

### Cloud 会看到我的本地模型吗？

只有你上传的模型，或客户端主动提供同步的模型才会参与。仅存在于本地模型库中的模型不会被自动上传。

## 相关链接

- [spm-cloud 仓库](https://github.com/sdf123098/spm-cloud)
- [spm-cloud 发布页](https://github.com/sdf123098/spm-cloud/releases)
- [Sparkle-Morpher 仓库](https://github.com/sdf123098/Sparkle-Morpher)
- [Sparkle-Morpher 发布页](https://github.com/sdf123098/Sparkle-Morpher/releases)

相关页面：

- [Sparkle-Morpher (SPM)](./Sparkle-Morpher)
