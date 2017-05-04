MetaclicUtils.Templates = {};


MetaclicUtils.Templates.datasets = [

    ' {{#ifCond sort "!=" false}}',
    '    <div class="result-sort"><label>Trier par</label>',
    '       <select name="sort" class="form-control">',
    '            {{#each sortTypes}}',

    '            {{#ifCond id "==" ../sort}}',
    '            <option value="{{id}}" selected>{{name}}</option>',
    '            {{else}}',
    '            <option value="{{id}}">{{name}}</option>',
    '            {{/ifCond}}',

    '            {{/each}}',
    '       </select>',
    '       <a href="#" class="sortdirection">',
    '            {{#ifCond sortDesc "==" true}}',
    '            <i class="fa fa-sort-alpha-desc"></i>',
    '            {{else}}',
    '            <i class="fa fa-sort-alpha-asc"></i>',
    '            {{/ifCond}}',
    '       </a>',
    '</div>',
    '{{/ifCond}}',

    '<div class="result-count">{{ total }} résultat(s)</div>',

    '<div class="metaclic-row">',
    '{{#ifCond facets "!=" undefined}}',
    '<div class="Metaclic-results">',
    '{{else}}',
    '<div class="Metaclic-results Metaclic-results-full">',
    '{{/ifCond}}',


    '    <ul class="search-results">',
    '        {{#each data}}',
    '        <li class="search-result dataset-result" data-dataset="{{id}}">',
    '            <a href="{{ page }}" title="{{  organization.name }}"  data-dataset="{{id}}">',
    '',
    '                <div class="result-logo">',
    '                    <img alt="" src="{{organization.logo}}" >',
    '                </div>',
    '                    {{#if organization.public_service }}',
    '                        <img alt="certified"',
    '                            class="certified" rel="popover"',
    '                            data-title="{{_ \'certified_public_service\'}}"',
    '                            data-content="{{_ \'the_identity_of_this_public_service_public_is_certified_by_etalab\'}}"',
    '                            data-container="body" data-trigger="hover"/>',
    '                        {{/if}}',
    '                <div class="result-body">',
    '                    <h4 class="result-title">{{title}}</h4>',
    '',
    '                    <div class="result-description">',
    '                        {{mdshort description 128}}</div></div>',
    '',
    '                </a><ul class="result-infos">',
    '',
    '                    {{#if temporal_coverage }}',
    '                        <li>',
    '                            <span rel="tooltip"',
    '                                data-placement="top" data-container="body"',
    '                                title="{{_ \'temporal_coverage\'}}">',
    '                                <span class="fa fa-calendar fa-fw"></span>',
    '                                {{dt temporal_coverage.start format=\'L\' }} {{_ \'to\'}} {{dt temporal_coverage.end format=\'L\' }}',
    '                            </span>',
    '                        </li>',
    '                    {{/if}}',
    '',
    '                    {{#if frequency }}',
    '                        <li>',
    '                            <span rel="tooltip"',
    '                                data-placement="top" data-container="body"',
    '                                title="{{_ \'Update frequency\' }}">',
    '                                <span class="fa fa-clock-o fa-fw"></span>',
    '                                {{_ frequency }}',
    '                            </span>',
    '                        </li>',
    '                    {{/if}}',
    '',
    '                    {{#if spatial.territories }}',
    '                        <li>',
    '                            <span rel="tooltip"',
    '                                data-placement="top" data-container="body"',
    '                                title="{{_ \'Spatial coverage\'}}">',
    '                                <span class="fa fa-map-marker fa-fw"></span>',
    '                                {{_ spatial.territories.0.name }}',
    '                            </span>',
    '                        </li>',
    '                    {{/if}}',
    '',
    '                    {{#if spatial.granularity }}',
    '                        <li>',
    '                            <span rel="tooltip"',
    '                                data-placement="top" data-container="body"',
    '                                title="{{_ \'Spatial granularity\'}}">',
    '                                <span class="fa fa-bullseye fa-fw"></span>',
    '                                {{_ spatial.granularity }}',
    '                            </span>',
    '                        </li>',
    '                    {{/if}}',
    '',
    '                    <li>',
    '                        <span rel="tooltip"',
    '                            data-placement="top" data-container="body"',
    '                            title="{{_ \'Reuses\'}}">',
    '                            <span class="fa fa-retweet fa-fw"></span>',
    '                            {{default metrics.reuses 0 }}',
    '                        </span>',
    '                    </li>',
    '',
    '                    <li>',
    '                        <span rel="tooltip"',
    '                            data-placement="top" data-container="body"',
    '                            title="{{_ \'Followers\'}}">',
    '                            <span class="fa fa-star fa-fw"></span>',
    '                            {{default metrics.followers 0 }}',
    '                        </span>',
    '                    </li>',
    '',
    '                </ul>',
    '        </li>',
    '    {{/each}}',
    '    </ul>',
    '</div>',

    '{{#ifCond facets "!=" undefined}}',
    '<div class="Metaclic-facets">',

    '{{#ifCond facets.organization "!=" undefined}}',
    '{{#if facets.organization}}',
    '<div class="facet-panel">',
    '    <div class="facet-panel-heading"><i class="fa fa-tags fa-fw"></i> Organisme</div>',
    '    <ul data-limitlist=5>',
    '       {{#each facets.organization}}',
    '       <a href="#" data-addID="{{this.[0]._id.$oid}}">',
    '       <span>{{this.[1]}}</span>',
    '       {{this.[0].name}}',
    '       </a>',
    '       {{/each}}',
    '    </ul>',
    '</div>',
    '{{/if}}',
    '{{/ifCond}}',

    '{{#ifCond facets.tag "!=" undefined}}',
    '{{#if facets.tag}}',
    '<div class="facet-panel">',
    '    <div class="facet-panel-heading"><i class="fa fa-tags fa-fw"></i> Tags</div>',
    '    <ul data-limitlist=5>',
    '       {{#each facets.tag}}',

    '       <a href="#" data-addTag="{{this.[0]}}">',
    '       <span>{{this.[1]}}</span>',
    '       {{this.[0]}}',
    '       </a>',
    '       {{/each}}',
    '    </ul>',
    '</div>',
    '{{/if}}',
    '{{/ifCond}}',
    '{{#ifCond facets.license "!=" undefined}}',
    '{{#if facets.license}}',
    '<div class="facet-panel">',
    '    <div class="facet-panel-heading"><i class="fa fa-copyright fa-fw"></i> Licences</div>',
    '    <ul data-limitlist=5>',
    '       {{#each facets.license}}',

    '       <a href="#" data-addLicense="{{this.[0]._id}}">',
    '       <span>{{this.[1]}}</span>',
    '       {{this.[0].title}}',
    '       </a>',
    '       {{/each}}',
    '    </ul>',
    '</div>',
    '{{/if}}',
    '{{/ifCond}}',

    //couverture temporelle

    '{{#ifCond facets.geozone "!=" undefined}}',
    '{{#if facets.geozone}}',
    '<div class="facet-panel">',
    '    <div class="facet-panel-heading"><i class="fa fa-map-marker fa-fw"></i> Couverture spatiale</div>',
    '    <ul data-limitlist=5>',
    '       {{#each facets.geozone}}',

    '       <a class="geozone-to-load" href="#" data-addGeozone="{{this.[0]._id}}">',
    '       <span>{{this.[1]}}</span>',
    '       {{this.[0]._id}} ({{this.[0].code}})',
    '       </a>',
    '       {{/each}}',
    '    </ul>',
    '</div>',
    '{{/if}}',
    '{{/ifCond}}',



    '{{#ifCond facets.granularity "!=" undefined}}',
    '{{#if facets.granularity}}',
    '<div class="facet-panel">',
    '    <div class="facet-panel-heading"><i class="fa fa-bullseye fa-fw"></i> Granularité territoriale</div>',
    '    <ul data-limitlist=5>',
    '       {{#each facets.granularity}}',

    '       <a href="#" data-addGranularity="{{this.[0]}}">',
    '       <span>{{this.[1]}}</span>',
    '       {{_ this.[0]}}',
    '       </a>',
    '       {{/each}}',
    '    </ul>',
    '</div>',
    '{{/if}}',
    '{{/ifCond}}',


    '{{#ifCond facets.format "!=" undefined}}',
    '{{#if facets.format}}',
    '<div class="facet-panel">',
    '    <div class="facet-panel-heading"><i class="fa fa-file fa-fw"></i> Formats</div>',
    '    <ul data-limitlist=5>',
    '       {{#each facets.format}}',

    '       <a href="#" data-addFormat="{{this.[0]}}">',
    '       <span>{{this.[1]}}</span>',
    '       {{_ this.[0]}}',
    '       </a>',
    '       {{/each}}',
    '    </ul>',
    '</div>',
    '{{/if}}',
    '{{/ifCond}}',

    // reuse


    '</div>',
    '{{/ifCond}}',

    '</div>',

    '        <div class="metaclic-pagination">',
    '            {{{ paginate page total page_size }}}',
    '        </div>',
];



MetaclicUtils.Templates.dataset = [
    '<div class="dataset" data-dataset="{{id}}">',
    '',
    '        <div class=\'dataset-info\'>',
    '            <blockquote>{{md description }}</blockquote>',
    '             {{#if extras.remote_url}}',
    '            <a class="site_link" href="{{extras.remote_url}}" target=_blank>',
    '                Voir le site original',
    '            </a>',
    '             {{/if}}',
    '            <p class="published_on">',
    '                {{_ \'published_on\' }} {{dt created_at}}',
    '                {{_ \'and_modified_on\'}} {{dt last_modified}}',
    '                {{_ \'by\'}} <a title="{{organization.name}}" href="{{organization.page}}">{{organization.name}}</a>',
    '            </p>',
    '        </div>',
    '',
    '        <div class="resources-list">',
    '            <h3>{{_ \'Resources\'}}</h3>',
    '            {{#each resources}}',
    '            <div data-checkurl="/api/1/datasets/checkurl/" itemtype="http://schema.org/DataDownload" itemscope="itemscope" id="resource-{{id}}">',
    '',
    '                <a href="{{url}}" data-size="{{filesize}}" data-format="{{uppercase format}}" data-map_title="{{../title}}" data-title="{{title}}" data-id="{{id}}" itemprop="url" target=_blank>',
    '                    <h4>',
    '                        <span data-format="{{uppercase format}}">',
    '                            {{uppercase format}}',
    '                        </span>',
    '                        {{title}}',
    '                        <p>',
    '                            Dernière modification le {{dt last_modified}}',
    '                        </p>',
    '                    </h4>',
    '                </a>',
    '',
    '            </div>',
    '            {{/each}}',
    '        </div>',
    '',
    '        <div class="meta">',
    '',
    '            <div class="producer">',
    '                <h3>{{_ \'Producer\'}}</h3>',
    '                <a title="{{organization.name}}" href="{{organization.page}}">',
    '                    <img class="organization-logo producer" alt="{{organization.name}}" src="{{fulllogo organization.logo}}"><br>',
    '                    <span class="name">',
    '                        {{organization.name}}',
    '                    </span>',
    '                </a>',
    '            </div>',
    '',
    '',
    '            <div class="info">',
    '                <h3>{{_ \'Informations\'}}</h3>',
    '                <ul>',
    '                    <li title="{{_ \'License\'}}" rel="tooltip">',
    '                        <i class="fa fa-copyright"></i>',
    '                        <!--a href="http://opendatacommons.org/licenses/odbl/summary/"-->',
    '                        {{_ license}}',
    '                        <!--/a-->',
    '                    </li>',
    '                    <li title="{{_ \'Frequency\'}}" rel="tooltip">',
    '                        <span class="fa fa-clock-o"></span>',
    '                        {{_ frequency}}',
    '                    </li>',
    '                    <li title="{{_ \'Spatial granularity\'}}"  rel="tooltip">',
    '                        <span class="fa fa-bullseye"></span>',
    '                        {{_ spatial.granularity}}',
    '                    </li>',
    '                </ul>',
    '                <ul class="spatial_zones">',
    '                    {{#each spatial.zones}}',
    '                    <li data-zone="{{.}}">{{.}}</li>',
    '                    {{/each}}',
    '               </ul>',
    '                <ul class="tags">',
    '                    {{#each tags}}',
    '                    <li><a title="{{.}}" href="https://www.data.gouv.fr/fr/search/?tag={{.}}">',
    '                        {{.}}',
    '                    </a>',
    '                </li>',
    '                {{/each}}',
    '            </ul>',
    '            <div class="Metaclic-clear">',
    '            </div>',
      '        </div>',
    '        </div>',
    '',
    '',
    '    </div>'
];
 

MetaclicUtils.Templates.datasetsForm = [
    '<div class="datasetsForm">',
    '{{#if production}}',
    '   <input type="text" id="metaclic-autocomplete-input" list="metaclic-autocomplete-list" class="form-control" placeholder="Organisation">',
    '   <button type="button" class="btn btn-default">Ajouter</button>',
    '   <datalist id="metaclic-autocomplete-list">',
    '   </datalist>',
    '   <ul class="tags">',
    '       {{#if orgs}}',
    '           {{#each orgs}}',
    '               {{#if name}}',
    '               <li><a title="Fermer" href="#" class="facet-remove facet-organization" data-removeorganizationtoorigin="organization" data-id="{{id}}"> {{name}} ×</a></li>',
    '               {{/if}}',
    '           {{/each}}',
    '       {{/if}}',
    '   </ul>',
    '{{/if}}',
    ' <form action="" method="get">',
    '    <input type="hidden" name="option" value="com_metaclic"></input>',
    '    <input type="hidden" name="view" value="metaclic"></input>',
    '    <div><label>&nbsp;</label><input type="text" name="q" value="{{q}}" placeholder="Rechercher des données" class="form-control"></input></div>',
    '        {{#ifCount orgs ">" 1 }}',
    '    <div>', 
    '        {{else}}',
    '    <div class="hidden">',
    '        {{/ifCount}}', 
    '       </div>',
    //'    <div><label></label><input type="submit" value="ok"></input></div>',
    '    </form>',
    '    <div class="selected_facets">',
    '<ul class="tags">',
    '   {{#if organization}}',
    '   {{#if organization_name}}',
    '   {{#ifNotall organization "|"}}',
    '       <li><a title="{{_ \'fermer\'}}" href="#" class="facet-remove facet-organization" data-removeOrganization="organization"> {{organization_name}} &times;</a></li>',
    '   {{/ifNotall}}',
    '   {{/if}}',
    '   {{/if}}',
    '   {{#if tags}}',
    '   {{#each tags}}',
    '       <li><a title="{{_ \'fermer\'}}" href="#" class="facet-remove facet-tag" data-removeTag="{{.}}"><i class="fa fa-tags fa-fw"></i> {{.}} &times;</a></li>',
    '   {{/each}}',
    '   {{/if}}',
    '   {{#if license}}',
    '       <li><a title="{{_ \'fermer\'}}" href="#" class="facet-remove facet-license" data-removeParam="license"><i class="fa fa-copyright fa-fw"></i> {{license}} &times;</a></li>',
    '   {{/if}}',
    '   {{#if geozone}}',
    '       <li><a title="{{_ \'fermer\'}}" href="#" class="facet-remove facet-geozone" data-removeParam="geozone"><i class="fa fa-map-marker fa-fw"></i> {{geozone}} &times;</a></li>',
    '   {{/if}}',
    '   {{#if granularity}}',
    '       <li><a title="{{_ \'fermer\'}}" href="#" class="facet-remove facet-granularity" data-removeParam="granularity"><i class="fa fa-bullseye  fa-fw"></i> {{granularity}} &times;</a></li>',
    '   {{/if}}',
    '   {{#if format}}',
    '       <li><a title="{{_ \'fermer\'}}" href="#" class="facet-remove facet-format" data-removeParam="format"><i class="fa fa-file fa-fw"></i> {{format}} &times;</a></li>',
    '   {{/if}}',
    '   </div>',
    '   </ul>',
    '</div>',
    '    <br>'
];




MetaclicUtils.Templates.lastdatasets = [
    '<div class="Metaclic-lastdatasets">',
    '      {{#each data}}',
    '      <div class="card dataset-card">',
    '            <a class="card-logo" href="{{ organization.uri }}" target="datagouv">',
    '                <img alt="{{  organization.name }}" src="{{ organization.logo }}" width="70" height="70">',
    '            </a>',
    '        <div class="card-body">',
    '            <h4>',
    '                <a href="{{ url }}" title="{{title}}">',
    '                    {{title}}',
    '                </a>',
    '            </h4>',
    '        </div>',
    '        <footer>',
    '            <ul>',
    '                <li>',
    '                    <a rel="tooltip" data-placement="top" data-container="body" title="" data-original-title="Réutilisations">',
    '                        <span class="fa fa-retweet fa-fw"></span>',
    '                        {{default metrics.reuses 0 }}',
    '                    </a>',
    '                </li>',
    '                <li>',
    '                    <a rel="tooltip" data-placement="top" data-container="body" title="" data-original-title="Favoris">',
    '                        <span class="fa fa-star fa-fw"></span>',
    '                        {{default metrics.followers 0 }}',
    '                    </a>',
    '                </li>',
    '            </ul>',
    '        </footer>',
    '        <a href="{{ url }}" title="{{title}}">',
    '            {{trimString description}}',
    '        </a>',
    '        <footer>',
    '        <ul>',
    '            {{#if temporal_coverage }}',
    '            <li>',
    '                <a rel="tooltip"',
    '                    data-placement="top" data-container="body"',
    '                    title="{{_ \'Temporal coverage\' }}">',
    '                    <span class="fa fa-calendar fa-fw"></span>',
    '                    {{dt temporal_coverage.start format=\'L\' }} {{_ \'to\'}} {{dt temporal_coverage.end format=\'L\' }}',
    '                </a>',
    '            </li>',
    '            {{/if}}',
    '',
    '            {{#if spatial.granularity }}',
    '            <li>',
    '                <a rel="tooltip"',
    '                    data-placement="top" data-container="body"',
    '                    title="{{_ \'Territorial coverage granularity\' }}">',
    '                    <span class="fa fa-bullseye fa-fw"></span>',
    '                    {{_ spatial.granularity }}',
    '                </a>',
    '            </li>',
    '            {{/if}}',
    '',
    '            {{#if frequency }}',
    '            <li>',
    '                <a rel="tooltip"',
    '                    data-placement="top" data-container="body"',
    '                    title="{{_ \'Frequency\' }}">',
    '                    <span class="fa fa-clock-o fa-fw"></span>',
    '                    {{_ frequency }}',
    '                </a>',
    '            </li>',
    '            {{/if}}',
    '        </ul>',
    '        </footer>',
    '    </div>',
    '    {{/each}}',
    '    </div>'
];





MetaclicUtils.Templates.shareLink = [
    '<div class="Metaclic-shareLink">',
    //'<div class="linkDiv"><a href="#">intégrez cet outil de recherche sur votre site&nbsp;<i class="fa fa-share-alt"></i></a></div>',
    '<div>',
    '   <h4>Vous pouvez intégrer cet outil de recherche de données sur votre site</h4>',
    '   <p>Pour ceci collez le code suivant dans le code HTML de votre page</p>',
    '   <pre>',
    '&lt;script&gt;window.jQuery || document.write("&lt;script src=\'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js\'&gt;&lt;\\\/script&gt;")&lt;/script&gt;',
    '',
    '&lt;!-- chargement feuille de style font-awesome --&gt;',
    '&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"&gt;',
    '',
    '&lt;script src="{{baseUrl}}metaclic.js"&gt;&lt;/script&gt;',
    '&lt;div class="Metaclic-data"',
    '   data-q="{{q}}"',
    '   data-organizations="{{organizationList}}"',
    //'   data-organization="{{organization}}"',
    '   data-background_layers="{{background_layers}}"',
    '   data-page_size="{{page_size}}"',
    '&gt&lt;/div&gt',
    '   </pre>',
    "   <p>vous pouvez trouver plus d'info sur cet outil et son paramétrage à cette adresse: <a href='https://github.com/datakode/metaclic' target='_blank'>https://github.com/datakode/metaclic</a></p>",
    '</div>',
    '</div>',
];




MetaclicUtils.Templates.shareLinkMap = [
    '<div class="MetaclicMap-shareLink">',
    '<div class="linkDiv"><a href="#">intégrez cette carte à votre site&nbsp;<i class="fa fa-share-alt"></i></a></div>',
    '<div class="hidden">',
    '   <h4>Vous pouvez intégrer cet carte sur votre site</h4>',
    '   <p>Pour ceci collez le code suivant dans le code HTML de votre page</p>',
    '   <pre>',
    '&lt;script&gt;window.jQuery || document.write("&lt;script src=\'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js\'&gt;&lt;\\\/script&gt;")&lt;/script&gt;',
    '',
    '&lt;script src="{{baseUrl}}metaclic.js"&gt;&lt;/script&gt;',
    '&lt;div class="Metaclic-map"',
    "   data-resources='{{jsonencode resources}}'",
    //"   data-leaflet_map_options='{{jsonencode leaflet_map_options}}'",
    "   data-title='{{title}}'",
    '&gt&lt;/div&gt',
    '   </pre>',
    "   <p>vous pouvez trouver plus d'info sur cet outil et son paramétrage à cette adresse: <a href='https://github.com/datakode/metaclic' target='_blank'>https://github.com/datakode/metaclic</a></p>",
    '</div>',
    '</div>',
];


MetaclicUtils.Templates.li_resource = [
    '<li data-id="{{id}}">',
    '<a href="{{metadata_url}}">{{title}}</a>',
    '<i class="fa fa-copyright"></i> {{_ license}}',
    '<p class="organization" data-id="{{organization.id}}" data-slug="{{organization.slug}}">',
    '<img alt="{{  organization.name }}" src="{{ organization.logo }}">',
    '<span>{{organization.name}}</span>',
    '</p>',
    '</li>'
];