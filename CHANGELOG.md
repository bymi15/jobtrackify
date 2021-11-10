# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/bymi15/JobTrackify/compare/v0.3.1...v0.4.0) (2021-11-10)


### ⚠ BREAKING CHANGES

* allow custom companies to be added to a job application

### Features

* **CompanySelect:** display industry in company select ([36941c9](https://github.com/bymi15/JobTrackify/commit/36941c9cad19c2c97f16e1531dd99b995ebf0321))
* add custom scrollbar and refactor JobModal into components ([db8bf40](https://github.com/bymi15/JobTrackify/commit/db8bf409d7a71d4cb2b31c8c273ae6722a00c6f3))
* **Company:** add description and type field ([e1e7625](https://github.com/bymi15/JobTrackify/commit/e1e7625f79144e3095721229a11879e52de43687))
* **filterCompanies:** add filterCompanies utils function ([a9a5157](https://github.com/bymi15/JobTrackify/commit/a9a5157545e15619fe59ab9b0c96620b15a5f134))
* **JobModal:** add company tab content ([e876780](https://github.com/bymi15/JobTrackify/commit/e87678047933c745b3a89b66f54a67cd9328aeb7))
* **JobModal:** improve note UI ([7238f3c](https://github.com/bymi15/JobTrackify/commit/7238f3cf75a1aebc474c394752a9d71938130f5d))
* **Note:** add note functionality to job modal ([1cee80e](https://github.com/bymi15/JobTrackify/commit/1cee80e0c2df2edd0ecb969afebd7fbbcf51e20f))
* **Profile:** add date registered field ([436d1a2](https://github.com/bymi15/JobTrackify/commit/436d1a26f457a0b2493f4de37830f6e4065a15e2))
* add custom company autocomplete component ([3aff603](https://github.com/bymi15/JobTrackify/commit/3aff6037dbd0c4514f5798d05c7a79da25c67725))
* add email confirmation pages ([b60bd61](https://github.com/bymi15/JobTrackify/commit/b60bd611a15b28b6b0b0674210bd00e094572ee5))


### Bug Fixes

* fix react warnings ([74b6da3](https://github.com/bymi15/JobTrackify/commit/74b6da36a1bf520dc4fb0a87c2460e2e257f95bd))
* refactor emails and home urls ([04f0122](https://github.com/bymi15/JobTrackify/commit/04f012242e87bd97dc8915d72792b4744c5d5fb5))
* remove base url ([22a43b4](https://github.com/bymi15/JobTrackify/commit/22a43b480471eee0b471cfb15f56328fd38d1c0c))
* use hashrouter and set basename ([92829d0](https://github.com/bymi15/JobTrackify/commit/92829d0658e3c7ea9784bf84d7ae459ae3feb94d))
* **cache:** fix cache remove bug ([74889b8](https://github.com/bymi15/JobTrackify/commit/74889b84e3b4979dd57fd293e8c615946339e62a))
* **cache:** fix clear cache issue with company and boardColumn ([017d36b](https://github.com/bymi15/JobTrackify/commit/017d36b71845efbd2f3ab9cc002d5bdf840b2eac))
* **JobInfoTab:** connect description textarea with dispatch ([32aa52b](https://github.com/bymi15/JobTrackify/commit/32aa52b185b8139c1a0208ca5caa81c1f4dddd63))
* replace perfect scrollbar with custom scrollbar ([b11cfb4](https://github.com/bymi15/JobTrackify/commit/b11cfb4d71952012febfd6e4134f0025ab1d38bd))
* **about:** updated terms of condition and privacy policy ([cbdd4aa](https://github.com/bymi15/JobTrackify/commit/cbdd4aaefc83ff4a9153831d3bcaccee86591afc))
* **Loader:** improve Loader UI vertical alignment ([7df283d](https://github.com/bymi15/JobTrackify/commit/7df283d65156dcee8a512a316b7971651de3cf4a))
* **routes:** fix dispatchGetCompanies in routes ([f4d296a](https://github.com/bymi15/JobTrackify/commit/f4d296aaa8a3ca11a761e8b5618141cf13b8c7df))

### [0.3.1](https://github.com/bymi15/JobTrackify/compare/v0.3.0...v0.3.1) (2020-11-07)


### Features

* **Map:** add map page ([21fbd14](https://github.com/bymi15/JobTrackify/commit/21fbd14b7e190e4cd4409341827bdf6f98c23b6d))
* **mapDucks:** add map ducks ([1964e5f](https://github.com/bymi15/JobTrackify/commit/1964e5f770c3d3438fbd25831128b767418a9b5e))

## [0.3.0](https://github.com/bymi15/JobTrackify/compare/v0.2.5...v0.3.0) (2020-11-04)


### ⚠ BREAKING CHANGES

* add user profile and settings

### Features

* add user page ([c2c28f8](https://github.com/bymi15/JobTrackify/commit/c2c28f81fa23648c579ed293dc5707fdf9218124))
* **authDucks:** add updateProfile, changePassword, functionality ([92f0736](https://github.com/bymi15/JobTrackify/commit/92f0736b44cb700021e1a35c8b7deafcb509fd0a))
* **Sidebar:** add sidebar component ([456a671](https://github.com/bymi15/JobTrackify/commit/456a6713e80296486108d2171b271fd6a117f07c))
* **UserLayout:** add User layout ([40f143e](https://github.com/bymi15/JobTrackify/commit/40f143eb50b72633487e6899049a0f8a6253fccd))
* **UserRoutes:** update routes ([abd7949](https://github.com/bymi15/JobTrackify/commit/abd79497019fd29b0f4eddbdb8205c541cdd4df3))


### Bug Fixes

* **apiMiddleware:** remove ignoreErrors parameter causing bugs ([f902c14](https://github.com/bymi15/JobTrackify/commit/f902c141f512bb4c020908ec7f6825387851e76f))
* **Dashboard:** update Dashboard layout ([b1aa223](https://github.com/bymi15/JobTrackify/commit/b1aa223a0a0777c9a573a80fb05b7789c99bffe4))
* **showToast:** change callback to trigger immediately with onShowComplete ([903505c](https://github.com/bymi15/JobTrackify/commit/903505c36a84ffd86f73ea415c3549d057ea27e8))

### [0.2.5](https://github.com/bymi15/JobTrackify/compare/v0.2.4...v0.2.5) (2020-11-03)


### Features

* add github pages SPA support for frontend routing ([ebc8c37](https://github.com/bymi15/JobTrackify/commit/ebc8c373257a0fd9e3749e5f0494615ffc3e9fc2))
* **sitemap:** add sitemap ([4c88fbe](https://github.com/bymi15/JobTrackify/commit/4c88fbed54e533bfa13b672729ba0a31d28658a2))

### [0.2.4](https://github.com/bymi15/JobTrackify/compare/v0.2.3...v0.2.4) (2020-11-02)


### Features

* **cache:** add async cache storage for companies ([42e04bd](https://github.com/bymi15/JobTrackify/commit/42e04bd3e4929a71512fb7b36817d47484ee378e))


### Bug Fixes

* **companyReducer:** fix bug in set company from cache ([8b87df0](https://github.com/bymi15/JobTrackify/commit/8b87df05d3d53dcac04bb79bae72498f2cbae938))
* **jobDucks:** fix utils function: insertGroupedJob bug ([0b73413](https://github.com/bymi15/JobTrackify/commit/0b7341358ed5404e6e6211ecc9538588c774a834))

### [0.2.3](https://github.com/bymi15/JobTrackify/compare/v0.2.2...v0.2.3) (2020-11-02)


### Features

* **About:** add about page content ([9ee3b47](https://github.com/bymi15/JobTrackify/commit/9ee3b476d273c4879853fd17d7f0c72d1bf15668))
* **App:** improve responsiveness for small screen devices ([e3bba84](https://github.com/bymi15/JobTrackify/commit/e3bba8463cb3f1468b9226c16da97fbd702e6229))
* **Footer:** add footer ([fcd88ad](https://github.com/bymi15/JobTrackify/commit/fcd88ad73cc5ab7bee737a1b990a11062fc5fe4f))


### Bug Fixes

* **cname:** fix CNAME ([fc14d2d](https://github.com/bymi15/JobTrackify/commit/fc14d2df8a5a3e2f3d94f5acc261186f3b4e472b))

### [0.2.2](https://github.com/bymi15/JobTrackify/compare/v0.2.1...v0.2.2) (2020-11-01)


### Bug Fixes

* **config:** update prod backend api url ([9c357fc](https://github.com/bymi15/JobTrackify/commit/9c357fcc06cfc7758d8fa21e0cab12a0d78be4c1))

### [0.2.1](https://github.com/bymi15/JobTrackify/compare/v0.2.0...v0.2.1) (2020-11-01)


### Features

* **assets:** add logo ([299aaf7](https://github.com/bymi15/JobTrackify/commit/299aaf742a652e522f92200aced0068535b2360d))
* **board:** add handle drag and drop jobs event ([f7952db](https://github.com/bymi15/JobTrackify/commit/f7952dbba9a7b54aa336df58b6ef41b6a1960da0))
* **board:** add move job functionality ([e53a3cd](https://github.com/bymi15/JobTrackify/commit/e53a3cd0259e8e5c0e9dad795daaaad63bb5151e))
* **Board:** add horizontal scrolling to board ([22ed9e9](https://github.com/bymi15/JobTrackify/commit/22ed9e93fc4f74b5a8f4524e630a99281a435387))
* **BoardColumnSelect:** add board column select component ([3f3d59e](https://github.com/bymi15/JobTrackify/commit/3f3d59e9171feb07b07e5a8f5d3270e2dd75f3c4))
* **boardDucks:** add update board ducks ([cb56fd0](https://github.com/bymi15/JobTrackify/commit/cb56fd0411bbf9e334e3b8abc10800ce84a02c48))
* **CompanySelect:** add company select with logo component ([83184e8](https://github.com/bymi15/JobTrackify/commit/83184e82e8fce0a04fefdc2ec07a57e95ed51b4d))
* **dashboard:** add map and statistic pages ([cf48715](https://github.com/bymi15/JobTrackify/commit/cf487157169eeb93cda5975822dc88c71b33acc1))
* **Info:** add Info layout ([fa238dd](https://github.com/bymi15/JobTrackify/commit/fa238dd0a853f8dbf47c827a333be8415dfe6abc))
* **InputDialog:** add reusable input dialog component with async hook ([6606a65](https://github.com/bymi15/JobTrackify/commit/6606a652826d8fdbed347cf123fc0149382a13e0))
* **jobDucks:** add moveJob functionality and util helpers ([3322382](https://github.com/bymi15/JobTrackify/commit/3322382143b7edb03ed30e3b37ce520783383b3f))
* **jobDucks:** add updateJob and moveJob functionalities ([caa207e](https://github.com/bymi15/JobTrackify/commit/caa207e84b1a61e74a49a332915e294b17e00bb0))
* **JobModal:** add save job functionality ([8d11a87](https://github.com/bymi15/JobTrackify/commit/8d11a876788bb28e2219faa792ae41b450c4bb0a))
* **jobReducer:** add groupedJobs for create and delete actions ([8b35e1e](https://github.com/bymi15/JobTrackify/commit/8b35e1eefeb3692c997f78d8f54b69b8730c63eb))
* **pages:** add Privacy and Terms and Conditions page ([2b63731](https://github.com/bymi15/JobTrackify/commit/2b637319a5c295b135b5d29237429013d99c51b3))
* **Topbar:** add navigation functionality ([ad8bba2](https://github.com/bymi15/JobTrackify/commit/ad8bba2b022189dece9af36a750dd6cb3f2c0499))
* **Topbar:** add topbar with select board dropdown ([8b7f0b8](https://github.com/bymi15/JobTrackify/commit/8b7f0b8c919ff4f974c15a16b6350992133c737a))


### Bug Fixes

* **groupJobsByColumn:** sort the jobs by ascending order of sortOrder after grouping ([ab98239](https://github.com/bymi15/JobTrackify/commit/ab98239e23fe09179c3ed3d62ff6646c9ad3c87a))

## [0.2.0](https://github.com/bymi15/JobTrackify/compare/v0.1.2...v0.2.0) (2020-10-26)


### ⚠ BREAKING CHANGES

* **Dashboard:** add kanban board UI and retrieve jobs from API

### Features

* **boardColumnDucks:** add BoardColumn redux ducks ([cb89c02](https://github.com/bymi15/JobTrackify/commit/cb89c02d023411ededb7dd68681880373abe8b77))
* **companyDucks:** add company ducks ([2977ec6](https://github.com/bymi15/JobTrackify/commit/2977ec609ded69dc4e90af1a072e9214a8223d3b))
* **ConfirmDialog:** add ConfirmDialog async controller ([ef78386](https://github.com/bymi15/JobTrackify/commit/ef78386640a7a5fe946223f86903bffe210948e5))
* **dashboard:** add dashboard page ([c41fbe2](https://github.com/bymi15/JobTrackify/commit/c41fbe239ca7ff3b490c7ab821cda26bd2dc439e))
* **Dashboard:** add job kanban board ([a6d5ec1](https://github.com/bymi15/JobTrackify/commit/a6d5ec11d80cb6fcf692ff557db64772fa89b326))
* **dashboardDucks:** add dashboard redux ducks ([7a97f41](https://github.com/bymi15/JobTrackify/commit/7a97f41b123e66e80691a8a275045126c002bb60))
* **jobDucks:** add job ducks store ([77f8888](https://github.com/bymi15/JobTrackify/commit/77f8888b7e08da7fd7931b0a97750f919be2b3c6))
* **models:** add models for added ducks ([cccc6c1](https://github.com/bymi15/JobTrackify/commit/cccc6c107a7bc393c4c1d135dc7bea8d7371d1fe))

### [0.1.2](https://github.com/bymi15/JobTrackify/compare/v0.1.1...v0.1.2) (2020-10-25)


### Features

* **authPages:** add preloader for login and register ([4e323c2](https://github.com/bymi15/JobTrackify/commit/4e323c2d3fe72c457ff4ea26d84342a7a7e162b1))
* **Dashboard:** add dashboard page ([26072e2](https://github.com/bymi15/JobTrackify/commit/26072e249b49e19eba0f28d9ac734be5835c8526))


### Bug Fixes

* **apiMiddleware:** check undefined err response ([7b2d8ae](https://github.com/bymi15/JobTrackify/commit/7b2d8aefcd8474a796153da0a124b3592e55d938))
* **boardDucks:** update board redux ([16e5ead](https://github.com/bymi15/JobTrackify/commit/16e5eade6c0e1113d9d3cb7a8ebccbe44c6e7977))

### 0.1.1 (2020-10-25)


### Features

* **App:** set up project structure ([1dde835](https://github.com/bymi15/JobTrackify/commit/1dde835221a6fa3d3c3d7774c42f364f878bee3c))
* **assets:** add images ([3a68fc5](https://github.com/bymi15/JobTrackify/commit/3a68fc5145605c9ed43d8bba0765e46e6ed5cf9f))
* **customHooks:** add custom hooks ([2395f5e](https://github.com/bymi15/JobTrackify/commit/2395f5ea575f6acefa72c834145e9266383168fd))
* **LetterAvatar:** add letter avatar ([cec50d6](https://github.com/bymi15/JobTrackify/commit/cec50d6421f85e7f8dcb18c638c214000a937e9d))
* **Navbar:** add navbar ([ef41a41](https://github.com/bymi15/JobTrackify/commit/ef41a41f6c03cc471db199a15961b2a602ca9eac))
* **Toastr:** add redux toastr ([d7c3fa7](https://github.com/bymi15/JobTrackify/commit/d7c3fa7e54de619cb29caee4a4bd0a4bcced8272))
* **views:** add login, register pages ([881f8ea](https://github.com/bymi15/JobTrackify/commit/881f8eaa31ea684b3a62d693c91b7cfbbab57d74))


### Bug Fixes

* **store:** restructure redux store with ducks ([4a7f855](https://github.com/bymi15/JobTrackify/commit/4a7f8551ad12bff47713dab937a19500d47cfe11))
