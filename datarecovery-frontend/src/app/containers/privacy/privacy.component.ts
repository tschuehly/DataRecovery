import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-privacy',

  template: `
    <div class="container my-10">
      <h1 class="text-3xl font-bold">Datenschutz­erklärung</h1>
      <h2 class="text-2xl font-semibold mb-2 mt-4">1. Datenschutz auf einen Blick</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Allgemeine Hinweise</h3>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
        wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
        werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
        aufgeführten Datenschutzerklärung.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Datenerfassung auf dieser Website</h3> <h4
      class="font-semibold mt-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
        Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p> <h4
      class="font-semibold mt-2">Wie erfassen wir Ihre Daten?</h4>
      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
        handeln, die Sie in ein Kontaktformular eingeben.</p>
      <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
        erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
        Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> <h4
      class="font-semibold mt-2">Wofür nutzen wir Ihre Daten?</h4>
      <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
        können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <h4 class="font-semibold mt-2">Welche Rechte
      haben Sie bezüglich Ihrer Daten?</h4>
      <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
        personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
        zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
        jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
        der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei
        der zuständigen Aufsichtsbehörde zu.</p>
      <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Analyse-Tools und Tools von Dritt­anbietern</h3>
      <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit
        sogenannten Analyseprogrammen.</p>
      <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">2. Hosting und Content Delivery Networks (CDN)</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Strato</h3>
      <p>Wir hosten unsere Website bei Strato. Anbieter ist die Strato AG, Pascalstraße 10, 10587 Berlin (nachfolgend:
        „Strato“). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer
        IP-Adressen.</p>
      <p>Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: <a
        href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer">https://www.strato.de/datenschutz/</a>.
      </p>
      <p>Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
        Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung
        abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
        Einwilligung ist jederzeit widerrufbar.</p>
      <h4 class="font-semibold mt-2">Abschluss eines Vertrages über Auftragsverarbeitung</h4>
      <p>Wir haben einen Vertrag über Auftragsverarbeitung mit Strato geschlossen. Hierbei handelt es sich um einen
        datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass Strato die personenbezogenen Daten
        unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Google Cloud CDN</h3>
      <p>Wir nutzen das Content Delivery Network Google Cloud CDN. Anbieter ist die Google Ireland Limited („Google“),
        Gordon House, Barrow Street, Dublin 4, Irland.</p>
      <p>Google bietet ein weltweit verteiltes Content Delivery Network an. Dabei wird technisch der
        Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von Google geleitet. Hierdurch
        können wir die weltweite Erreichbarkeit und die Leistungsfähigkeit unserer Website erhöhen.</p>
      <p>Der Einsatz von Google Cloud CDN beruht auf unserem berechtigten Interesse an einer möglichst fehlerfreien und
        sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).</p>
      <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
        finden Sie hier: <a href="https://cloud.google.com/terms/eu-model-contract-clause" target="_blank"
                            rel="noopener noreferrer">https://cloud.google.com/terms/eu-model-contract-clause</a>.</p>
      <p>Weitere Informationen zu Google Cloud CDN finden Sie hier: <a
        href="https://cloud.google.com/cdn/docs/overview?hl=de" target="_blank" rel="noopener noreferrer">https://cloud.google.com/cdn/docs/overview?hl=de</a>.
      </p>
      <h4 class="font-semibold mt-2">Abschluss eines Vertrages über Auftragsverarbeitung</h4>
      <p>Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit
        Google über den Einsatz von Google Cloud CDN geschlossen.</p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">3. Allgemeine Hinweise und Pflicht­informationen</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Datenschutz</h3>
      <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.</p>
      <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
        sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
        erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
        geschieht.</p>
      <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Hinweis zur verantwortlichen Stelle</h3>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>Tobias Jungbauer Datenrettung<br />
        Am Stein 9<br />
        85049 Ingolstadt<br></p>
      <p>Telefon: 0841 12840705<br />
        E-Mail: info@jungbauerdatenrettung.de<br></p>

      <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
        die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
        entscheidet.</p>

      <h3 class="font-semibold mb-2 mt-4 underline">Speicherdauer</h3>
      <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
        personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
        Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
        gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten
        haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung
        nach Fortfall dieser Gründe.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Hinweis zur Datenweitergabe in die USA und sonstige
        Drittstaaten</h3>
      <p>Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht
        sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten
        übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU
        vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet,
        personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich
        vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
        US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben
        auf diese Verarbeitungstätigkeiten keinen Einfluss.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
        bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt vom Widerruf unberührt.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
        gegen Direktwerbung (Art. 21 DSGVO)</h3>
      <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
        RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
        PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
        PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
        DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
        MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE
        IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
        VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
      <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
        JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
        WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
        WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
        DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
      <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
        insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
        mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
        gerichtlicher Rechtsbehelfe.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Recht auf Daten­übertrag­barkeit</h3>
      <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
        automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
        dies nur, soweit es technisch machbar ist.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">SSL- bzw. TLS-Verschlüsselung</h3>
      <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
        Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
        wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
      <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von
        Dritten mitgelesen werden.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Auskunft, Löschung und Berichtigung</h3>
      <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft
        über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
        Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Recht auf Einschränkung der Verarbeitung</h3>
      <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
        können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden
        Fällen:</p>
      <ul>
        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in
          der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </li>
        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der
          Löschung die Einschränkung der Datenverarbeitung verlangen.
        </li>
        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
          Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </li>
        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
          unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
          das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </li>
      </ul>
      <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer
        Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
        eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">4. Datenerfassung auf dieser Website</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Cookies</h3>
      <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem
        Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder
        dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
        automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen
        oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
      <p>Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite
        betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des
        Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
      <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
        Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
        Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p>
      <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur
        Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die
        Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich
        sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
        angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
        abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.</p>
      <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur
        im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das
        automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann
        die Funktionalität dieser Website eingeschränkt sein.</p>
      <p>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen
        dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Kontaktformular</h3>
      <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
        inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
      <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
        Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In
        allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung
        der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
        DSGVO) sofern diese abgefragt wurde.</p>
      <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
        Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Anfrage per E-Mail, Telefon oder Telefax</h3>
      <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
        hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
      <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
        Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In
        allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung
        der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
        DSGVO) sofern diese abgefragt wurde.</p>
      <p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B.
        nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
        Aufbewahrungsfristen – bleiben unberührt.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Registrierung auf dieser Website</h3>
      <p>Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu
        eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie
        sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben
        werden. Anderenfalls werden wir die Registrierung ablehnen.</p>
      <p>Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei
        der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.</p>
      <p>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der Durchführung des durch die
        Registrierung begründeten Nutzungsverhältnisses und ggf. zur Anbahnung weiterer Verträge (Art. 6 Abs. 1 lit. b
        DSGVO).</p>
      <p>Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website
        registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">5. Soziale Medien</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Twitter Plugin</h3>
      <p>Auf dieser Website sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten durch
        die Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland. Durch das
        Benutzen von Twitter und der Funktion „Re-Tweet“ werden die von Ihnen besuchten Websites mit Ihrem
        Twitter-Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Twitter übertragen.
        Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie
        deren Nutzung durch Twitter erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von
        Twitter unter: <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener noreferrer">https://twitter.com/de/privacy</a>.
      </p>
      <p>Die Verwendung des Twitter-Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
        hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine
        entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6
        Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
      <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
        finden Sie hier: <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html" target="_blank"
                            rel="noopener noreferrer">https://gdpr.twitter.com/en/controller-to-controller-transfers.html</a>.
      </p>
      <p>Ihre Datenschutzeinstellungen bei Twitter können Sie in den Konto-Einstellungen unter <a
        href="https://twitter.com/account/settings" target="_blank" rel="noopener noreferrer">https://twitter.com/account/settings</a>
        ändern.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">LinkedIn Plugin</h3>
      <p>Diese Website nutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Ireland Unlimited Company,
        Wilton Plaza, Wilton Place, Dublin 2, Irland.</p>
      <p>Bei jedem Abruf einer Seite dieser Website, die Funktionen von LinkedIn enthält, wird eine Verbindung zu
        Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie diese Website mit Ihrer IP-Adresse
        besucht haben. Wenn Sie den „Recommend-Button“ von LinkedIn anklicken und in Ihrem Account bei LinkedIn
        eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf dieser Website Ihnen und Ihrem Benutzerkonto
        zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten
        Daten sowie deren Nutzung durch LinkedIn haben.</p>
      <p>Die Verwendung des LinkedIn-Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
        hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine
        entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6
        Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
      <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
        finden Sie hier: <a
          href="https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-aus-der-eu-dem-ewr-und-der-schweiz?lang=de"
          target="_blank" rel="noopener noreferrer">https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-aus-der-eu-dem-ewr-und-der-schweiz?lang=de</a>
      </p>
      <p>Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von LinkedIn unter: <a
        href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a>.
      </p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">6. Analyse-Tools und Werbung</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Google Tag Manager</h3>
      <p>Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Irland.</p>
      <p>Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere
        Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile,
        speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und
        Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an
        das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann.</p>
      <p>Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
        hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener
        Tools auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
        ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Google Analytics</h3>
      <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited
        („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
      <p>Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei
        erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete
        Betriebssysteme und Herkunft des Nutzers. Diese Daten werden von Google ggf. in einem Profil zusammengefasst,
        das dem jeweiligen Nutzer bzw. dessen Endgerät zugeordnet ist.</p>
      <p>Des Weiteren können wir Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks aufzeichnen. Ferner
        verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen und setzt
        Machine Learning-Technologien bei der Datenanalyse ein.</p>
      <p>Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des
        Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen
        über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort
        gespeichert.</p>
      <p>Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
        ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung
        zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung
        von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
        Einwilligung ist jederzeit widerrufbar.</p>
      <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
        finden Sie hier: <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank"
                            rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
      </p> <h4 class="font-semibold mt-2">IP Anonymisierung</h4>
      <p>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google
        innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
        Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle
        IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
        Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene
        Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem
        Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
      <h4 class="font-semibold mt-2">Browser Plugin</h4>
      <p>Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem
        folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
      </p>
      <p>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von
        Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank"
                   rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p><h4
      class="font-semibold mt-2">Auftragsverarbeitung</h4>
      <p>Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der
        deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</p>
      <h4 class="font-semibold mt-2">Demografische Merkmale bei Google Analytics</h4>
      <p>Diese Website nutzt die Funktion „demografische Merkmale“ von Google Analytics, um den Websitebesuchern
        passende Werbeanzeigen innerhalb des Google-Werbenetzwerks anzeigen zu können. Dadurch können Berichte erstellt
        werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus
        interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner
        bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem
        Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt „Widerspruch gegen
        Datenerfassung“ dargestellt generell untersagen.</p>
      <h4 class="font-semibold mt-2">Google Analytics E-Commerce-Tracking</h4>
      <p>Diese Website nutzt die Funktion „E-Commerce-Tracking“ von Google Analytics. Mit Hilfe von E-Commerce-Tracking
        kann der Websitebetreiber das Kaufverhalten der Websitebesucher zur Verbesserung seiner
        Online-Marketing-Kampagnen analysieren. Hierbei werden Informationen, wie zum Beispiel die getätigten
        Bestellungen, durchschnittliche Bestellwerte, Versandkosten und die Zeit von der Ansicht bis zum Kauf eines
        Produktes erfasst. Diese Daten können von Google unter einer Transaktions-ID zusammengefasst werden, die dem
        jeweiligen Nutzer bzw. dessen Gerät zugeordnet ist.</p>
      <h4 class="font-semibold mt-2">Speicherdauer</h4>
      <p>Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z. B. User ID)
        oder Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14 Monaten anonymisiert
        bzw. gelöscht. Details hierzu ersehen Sie unter folgendem Link: <a
          href="https://support.google.com/analytics/answer/7667196?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/7667196?hl=de</a>
      </p>
      <h3 class="font-semibold mb-2 mt-4 underline">Google Ads</h3>
      <p>Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited
        („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
      <p>Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen,
        wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner können zielgerichtete
        Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt
        werden (Zielgruppen-Targeting). Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir
        beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt haben und wie
        viele Anzeigen zu entsprechenden Klicks geführt haben.</p>
      <p>Die Nutzung von Google Ads erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
        berechtigtes Interesse an einer möglichst effektiven Vermarktung seiner Dienstleistung Produkte.</p>
      <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
        finden Sie hier: <a href="https://policies.google.com/privacy/frameworks" target="_blank"
                            rel="noopener noreferrer">https://policies.google.com/privacy/frameworks</a> und <a
          href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
      </p>
      <h3 class="font-semibold mb-2 mt-4 underline">Google Conversion-Tracking</h3>
      <p>Diese Website nutzt Google Conversion Tracking. Anbieter ist die Google Ireland Limited („Google“), Gordon
        House, Barrow Street, Dublin 4, Irland.</p>
      <p>Mit Hilfe von Google-Conversion-Tracking können Google und wir erkennen, ob der Nutzer bestimmte Aktionen
        durchgeführt hat. So können wir beispielsweise auswerten, welche Buttons auf unserer Website wie häufig geklickt
        und welche Produkte besonders häufig angesehen oder gekauft wurden. Diese Informationen dienen dazu,
        Conversion-Statistiken zu erstellen. Wir erfahren die Gesamtanzahl der Nutzer, die auf unsere Anzeigen geklickt
        haben und welche Aktionen sie durchgeführt haben. Wir erhalten keine Informationen, mit denen wir den Nutzer
        persönlich identifizieren können. Google selbst nutzt zur Identifikation Cookies oder vergleichbare
        Wiedererkennungstechnologien.</p>
      <p>Die Nutzung von Google Conversion-Tracking erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
        Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot
        als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine
        Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
        1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
      <p>Mehr Informationen zu Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: <a
        href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
      </p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">7. Plugins und Tools</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Google Maps</h3>
      <p>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon
        House, Barrow Street, Dublin 4, Irland.</p>
      <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
        werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser
        Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
        einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr
        Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
      <p>Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an
        einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes
        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
        erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
        jederzeit widerrufbar.</p>
      <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
        finden Sie hier: <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank"
                            rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/</a> und
        <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank"
           rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.</p>
      <p>Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a
        href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
      </p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">8. eCommerce und Zahlungs­anbieter</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
      <p>Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche
        Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
        vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website
        (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die
        Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.</p>
      <p>Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht.
        Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
      <h3 class="font-semibold mb-2 mt-4 underline">Daten­übermittlung bei Vertragsschluss für Dienstleistungen und
        digitale Inhalte</h3>
      <p>Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig
        ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.</p>
      <p>Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich
        zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der
        Werbung, erfolgt nicht.</p>
      <p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
        Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
      <h2 class="text-2xl font-semibold mb-2 mt-4">9. Eigene Dienste</h2>
      <h3 class="font-semibold mb-2 mt-4 underline">OneDrive</h3>
      <p>Wir haben OneDrive auf dieser Website eingebunden. Anbieter ist die Microsoft Corporation, One Microsoft Way,
        Redmond, WA 98052-6399, USA (im folgenden „OneDrive“).</p>
      <p>OneDrive ermöglicht es uns, einen Uploadbereich auf unserer Website einzubinden, in dem Sie Inhalte hochladen
        können. Wenn Sie Inhalte hochladen, werden diese auf den Servern von OneDrive gespeichert. Wenn Sie unsere
        Website betreten, wird außerdem eine Verbindung zu OneDrive aufgebaut, sodass OneDrive feststellen kann, dass
        Sie unsere Website besucht haben.</p>
      <p>Die Verwendung von OneDrive erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
        berechtigtes Interesse an einem zuverlässigen Uploadbereich auf seiner Website. Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
      <h4 class="font-semibold mt-2">Abschluss eines Vertrags über Auftragsverarbeitung</h4>
      <p>Wir haben einen Vertrag über Auftragsverarbeitung mit OneDrive geschlossen. Hierbei handelt es sich um einen
        datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass OneDrive die personenbezogenen Daten
        unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
    </div>
  `,
  styles: []
})
export class PrivacyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
