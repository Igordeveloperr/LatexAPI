# Документация API LatexAPI

Документация по публичным методам класса BaseAPI для работы с LaTeX проектами.

## Таблица методов

| Метод | Параметры | Описание |
|-------|-----------|----------|
| close | () | Завершает соединение, уничтожая агент |
| passportLogin | (email: string, password: string) | Аутентификация пользователя с помощью email и пароля |
| cookiesLogin | (cookies: string) | Аутентификация пользователя с помощью cookies |
| updateCookies | (identity: Identity) | Обновление cookies в идентификационных данных |
| setIdentity | (identity: Identity) | Установка идентификационных данных для API |
| logout | (identity: Identity) | Выход пользователя из системы |
| userProjectsJson | (identity: Identity) | Получение списка проектов пользователя в формате JSON |
| getProjectsJson | (identity: Identity) | Получение списка проектов в формате JSON |
| projectEntitiesJson | (identity: Identity, projectId: string) | Получение сущностей проекта в формате JSON |
| newProject | (identity: Identity, projectName: string, template: 'none' \| 'example') | Создание нового проекта |
| cloneProject | (identity: Identity, projectId: string, projectName: string) | Клонирование существующего проекта |
| renameProject | (identity: Identity, projectId: string, newProjectName: string) | Переименование проекта |
| deleteProject | (identity: Identity, projectId: string) | Удаление проекта |
| archiveProject | (identity: Identity, projectId: string) | Архивирование проекта |
| unarchiveProject | (identity: Identity, projectId: string) | Разархивирование проекта |
| trashProject | (identity: Identity, projectId: string) | Перемещение проекта в корзину |
| untrashProject | (identity: Identity, projectId: string) | Восстановление проекта из корзины |
| getFile | (identity: Identity, projectId: string, fileId: string) | Получение содержимого файла |
| addDoc | (identity: Identity, projectId: string, parentFolderId: string, filename: string) | Добавление нового документа в проект |
| uploadFile | (identity: Identity, projectId: string, parentFolderId: string, filename: string, fileContent: Uint8Array) | Загрузка файла в проект |
| uploadProject | (identity: Identity, filename: string, fileContent: Uint8Array) | Загрузка проекта из файла |
| addFolder | (identity: Identity, projectId: string, folderName: string, parentFolderId: string) | Добавление новой папки в проект |
| deleteEntity | (identity: Identity, projectId: string, fileType: FileType, fileId: string) | Удаление сущности (файла/документа/папки) из проекта |
| deleteAuxFiles | (identity: Identity, projectId: string) | Удаление вспомогательных файлов проекта |
| renameEntity | (identity: Identity, projectId: string, entityType: string, entityId: string, name: string) | Переименование сущности в проекте |
| moveEntity | (identity: Identity, projectId: string, entityType: string, entityId: string, newParentFolderId: string) | Перемещение сущности в другую папку |
| compile | (identity: Identity, projectId: string, rootDoc_id: string \| null, draft: boolean = false, stopOnFirstError: boolean = false) | Компиляция проекта |
| stopCompile | (identity: Identity, projectId: string) | Остановка процесса компиляции |
| indexAll | (identity: Identity, projectId: string) | Индексация всех ссылок в проекте |
| getMetadata | (identity: Identity, projectId: string) | Получение метаданных проекта |
| proxyRequestToSpellingApi | (identity: Identity, language: string, userId: string, words: string[]) | Проверка орфографии слов |
| spellingControllerLearn | (identity: Identity, userId: string, word: string) | Добавление слова в список изученных |
| spellingControllerUnlearn | (identity: Identity, word: string) | Удаление слова из списка изученных |
| getProjectSettings | (identity: Identity, projectId: string) | Получение настроек проекта |
| updateProjectSettings | (identity: Identity, projectId: string, setting: any) | Обновление настроек проекта |
| getFileFromClsi | (identity: Identity, url: string, compileGroup: string) | Получение файла из CLSI сервиса |
| proxySyncPdf | (identity: Identity, projectId: string, page: number, h: number, v: number, buildId: string) | Синхронизация PDF с исходным кодом |
| proxySyncCode | (identity: Identity, projectId: string, file: string, line: number, column: number, buildId: string) | Синхронизация исходного кода с PDF |
| getAllTags | (identity: Identity) | Получение всех тегов |
| createTag | (identity: Identity, name: string) | Создание нового тега |
| renameTag | (identity: Identity, tagId: string, name: string) | Переименование тега |
| deleteTag | (identity: Identity, tagId: string) | Удаление тега |
| addProjectToTag | (identity: Identity, tagId: string, projectId: string) | Добавление проекта к тегу |
| removeProjectFromTag | (identity: Identity, tagId: string, projectId: string) | Удаление проекта из тега |
| proxyToHistoryApiAndGetUpdates | (identity: Identity, projectId: string, before?: number) | Получение обновлений истории проекта |
| proxyToHistoryApiAndGetFileDiff | (identity: Identity, projectId: string, pathname: string, from: number, to: number) | Получение различий в файле между двумя версиями |
| proxyToHistoryApiAndGetFileTreeDiff | (identity: Identity, projectId: string, from: number, to: number) | Получение различий в структуре файлов между двумя версиями |
| downloadZipOfVersion | (identity: Identity, projectId: string, version: number) | Загрузка ZIP-архива определенной версии проекта |
| getLabels | (identity: Identity, projectId: string) | Получение меток проекта |
| createLabel | (identity: Identity, projectId: string, comment: string, version: number) | Создание новой метки |
| deleteLabel | (identity: Identity, projectId: string, labelId: string) | Удаление метки |
| getMessages | (identity: Identity, projectId: string, limit: number = 50) | Получение сообщений проекта |
| sendMessage | (identity: Identity, projectId: string, client_id: string, content: string) | Отправка сообщения в проект |
| _initSocketV0 | (identity: Identity, query?: string) | Инициализация сокета для соединения (внутренний метод) |

## Типы

### FileType
Типы файлов: 'doc' | 'file' | 'folder' | 'outputs'

### Identity
Объект, содержащий CSRF токен и cookies для аутентификации

## Описание ResponseSchema

Все методы возвращают объект типа ResponseSchema, который может содержать:
- type: 'success' | 'error'
- raw: ArrayBuffer (опционально)
- message: string (опционально)
- userInfo: {userId: string, userEmail: string} (опционально)
- identity: Identity (опционально)
- projects: ProjectPersist[] (опционально)
- entity: FileEntity (опционально)
- entities: {path: string, type: string}[] (опционально)
- compile: CompileResponseSchema (опционально)
- content: Uint8Array (опционально)
- syncPdf: SyncPdfResponseSchema (опционально)
- syncCode: SyncCodeResponseSchema (опционально)
- meta: MetadataResponseScheme (опционально)
- misspellings: MisspellingItemSchema[] (опционально)
- tags: ProjectTagsResponseSchema[] (опционально)
- labels: ProjectLabelResponseSchema[] (опционально)
- updates: ProjectUpdateResponseSchema (опционально)
- diff: ProjectFileDiffResponseSchema (опционально)
- treeDiff: ProjectFileTreeDiffResponseSchema (опционально)
- messages: ProjectMessageResponseSchema[] (опционально)
