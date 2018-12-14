function calculate_score() {
    pct_a = parseFloat($("#pct_a").val())/100;
    pct_b = parseFloat($("#pct_b").val())/100;
    pct_c = parseFloat($("#pct_c").val())/100;
    pts_c = pct_c*330;
    pts_f = pts_c + parseFloat($("#pts").val());
    pct_f = pts_f/426;
    final_grade = ((pct_a * (20 / 90)) + (pct_b * (30 / 90)) + (pct_f * (40 / 90)) ) * 100;
    if (isNaN(final_grade)) {
        $("#final").text("--.--");
    } else {
        $("#final").text(Math.round(final_grade * 100) / 100);
    }
}

function calculate_final_pct() {
    pts = parseFloat($("#pts").val());
    pct = (pts/96) * 100
    if (isNaN(pct)) {
      $("#final_pct").text("--.--");
    } else {
      $("#final_pct").text(Math.round(pct * 100) / 100);
    }
}

function calc_b() {
    calculate_final_pct()
    calculate_score()
}